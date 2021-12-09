const lableContainer = document.getElementById('lable-list');
const addButton = document.getElementById('add-lable-btn');
const lable = document.getElementById('add-label');

//adding lables dynamically on page
addButton.addEventListener('click', function(e){
    e.preventDefault();
    let lableName = lable.value;
    console.log(lableName)
    if(lableName != ""){
        let div = document.createElement('div');
        div.classList.add('tag');
        div.innerText = lableName;
    
        lableContainer.appendChild(div);      
    }

    lable.value = "";
   
})