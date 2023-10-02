const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-task');

function addTask(event){
    event.preventDefault();
    if(inputBox.value ===''){
        alert("you need to add some task")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let cross=document.createElement('span');
        cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener('click',function(click){
    if(click.target.tagName==='LI'){
        click.target.classList.toggle('checked');
        saveData();
    }
    else if(click.target.tagName==='SPAN'){
        click.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();
