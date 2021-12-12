 
 //we are fetching project id whose issues need to be filtered
    const projectId = document.getElementById('projectId');
    const id = projectId.value;
    console.log(id);

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
          filter(element.issues, id) // sending issues and id of project to next funcion
      }
  });
}

//this fun will take out lables and authors from api request
function filter(issues,projectID){
    issues.forEach(element => {
        filterLable(element.lable, projectID)
        filterAuthor(element.issueAuthor,projectID);
    });
}




//fetching which lable and author is selected for filter

const authors = document.getElementsByClassName('author-check-input');
const lables = document.getElementsByClassName('lable-check-input');


//creating maps for storing lable and authors by which issues need to be filtered
var lableArr = {};
var authorArr = {};

// var map = {};
// // add a item
// map[key1] = value1;
// // or remove it
// delete map[key1];
// // or determine whether a key exists
// key1 in map;

document.getElementById('filter-button').addEventListener('click', function(e){
            e.preventDefault();
           
           for(let i = 0; i < authors.length; i++){ //taking out authors one by one
               if(authors[i].checked == true){ //checking if author is selected for filtering
                        if(authors[i].value in authorArr){ // and its issue is different
                        continue;
                    }else{
                        authorArr[authors[i].value] = 1;//then only add it into map
                    }
               }
           }

           console.log(authorArr);

           for(let i = 0; i < lables.length; i++){ //taking out lables one by one
            if(lables[i].checked == true){         // checking if lable is selected for filtering
                if(lables[i].value in lableArr){   // and its issue is different
                    continue;
                }else{
                    lableArr[lables[i].value] = 1; //then only add it into map
                }
            }
        }
        console.log(lableArr);
});



function filterAuthor(author, projectID){

}

function  filterLable(lable,projectID){

}

