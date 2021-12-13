  //fetching issues container we will add filtered results in this container
  const allIssueContainer = document.getElementById('all-issues');   

 //we are fetching project id whose issues need to be filtered
const projectId = document.getElementById('projectId');
const id = projectId.value;
   
   


//adding event listner on filter button
const filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', function(e){
            e.preventDefault();
            allIssueContainer.innerHTML = "";

            //making api request for fetching projects and its issues
            $.ajax({
                    type: "GET",
                    url: "http://localhost:5000/api/v1/projects",
                    error: function( error){ 
                        console.log("Error in fecting data from API", error); // if api fails it will show error to user
                            },
                    success: function (response) {
                        singleProject(response.projects); //it will send projects from api to next function
                    }
                });
                
                //this function will take out the project whose issues we need to filter by comparing id
                function singleProject(project){
                 project.forEach(element => {
                      if(id === element._id){
                          filter(element.issues) // sending issues and id of project to next funcion
                      }
                  });
                }
      

                
//fetching the lable and author which is selected for filter

const authors = document.getElementsByClassName('author-check-input');
const lables = document.getElementsByClassName('lable-check-input');

//creating map for storing lable and authors by which issues need to be filtered
var filterArray = {};
           
            // storing id's of filtered issues into map
           for(let i = 0; i < authors.length; i++){ //taking out authors one by one
               if(authors[i].checked == true){ //checking if author is selected for filtering
                        if(authors[i].value in filterArray){ // and its issue is not already present in a map
                        continue;
                    }else{
                        filterArray[authors[i].value] = 1;//then only add it into map
                    }
               }
           };

           // storing id's of filtered issues into map
           for(let i = 0; i < lables.length; i++){ //taking out lables one by one
            if(lables[i].checked == true){         // checking if lable is selected for filtering
                if(lables[i].value in filterArray){   // and its issue is not already present in a map
                    continue;
                }else{
                    filterArray[lables[i].value] = 1; //then only add it into map
                }
            }
        }



        //this function will look in map is this isssue is selected or not
         function filter(issues){

            console.log(filterArray.length);
            // if(filterArray.length === 0){
            //     allIssueContainer.innerHTML = "<H1> Please select lable or author"
            //     return;
            // }

            issues.forEach(element => {
                if(element._id in filterArray){ //if issue is present in map then we will add it to issue container

                   let div = document.createElement('div');
                   div.classList.add('issue-container');
                    div.innerHTML = (`
                    <p id="issue-name"><span>${element.issueName}</span></p>
                    <p id="auther-name">Auther :  <span>${element.issueAuthor}</span></p> 
                    
                    <div id="description">
                        <h5>Description</h5>
                        <p id="description-content">
                        ${element.issueDescription}
                        </p>
                    </div>
                    <div id="tags-container">
                        <div id="tag-name">Tags :</div>
                        <div class="tag"> ${element.lable} </div>
                    </div>
                    `)

                    allIssueContainer.appendChild(div);
                }
            });
        }
       
});


  
// logic for searching the issues by title and description

const searchButton = document.getElementById('search-button');
const searchedValue = document.getElementById('search-by-title-input');

searchButton.addEventListener('click', function(e){
    e.preventDefault();
   
    allIssueContainer.innerHTML = "";
     //making api request for fetching projects and its issues
     $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/v1/projects",
        error: function( error){ 
            console.log("Error in fecting data from API", error); // if api fails it will show error to user
                },
        success: function (response) {
            singleProject(response.projects); //it will send projects from api to next function
        }
    });
    
    //this function will take out the project whose issues we need to filter by comparing id
    function singleProject(project){
     project.forEach(element => {
          if(id === element._id){
              searchByTitle(element.issues) // sending issues and id of project to next funcion
          }
      });
    }

    function searchByTitle(issues){
        searchedTitle = '"' + searchedValue.value.toUpperCase() + '"';
        issues.forEach(element =>{
            let title = JSON.stringify(element.issueName.toUpperCase());
          
            if(title === searchedTitle){    
                console.log(searchedTitle, title);
                // console.log("mathced")
                let div = document.createElement('div');
                div.classList.add('issue-container');
                 div.innerHTML = (`
                 <p id="issue-name"><span>${element.issueName}</span></p>
                 <p id="auther-name">Auther :  <span>${element.issueAuthor}</span></p> 
                 
                 <div id="description">
                     <h5>Description</h5>
                     <p id="description-content">
                     ${element.issueDescription}
                     </p>
                 </div>
                 <div id="tags-container">
                     <div id="tag-name">Tags :</div>
                     <div class="tag"> ${element.lable} </div>
                 </div>
                 `);

                 allIssueContainer.appendChild(div);
            }
        })
      
    }

})



