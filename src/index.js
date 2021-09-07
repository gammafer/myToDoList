import {toDoObject,deleteToDoEvent} from "./modules/toDoObject";
import eListener from "./modules/addBtn";
import projectIIFE from "./modules/addProject";

const mainToDoScreen=document.getElementById('mainToDoScreen');
const addBtn=document.getElementById('addBtn');
const navProject=document.getElementById('project');
var toDoArray=[];
const populateWindow=()=>{
    
    if (localStorage.getItem('allTodo') !== null){
        let storageItem=localStorage.getItem('allTodo');
        let storageArray=JSON.parse(storageItem);
        let selectText=navProject.options[navProject.selectedIndex].text;
        for(let i=0;i<storageArray.length;i++){
            if(storageArray[i].project===selectText){
                getToDoData(storageArray[i].todo);
            }
        }
    }
    
}

const getToDoData=(form,project)=>{
    //sends data to toDoObject.js
    console.log(form);
    const newToDO=toDoObject(form.title,form.date,form.priority,form.description,form.project);
    mainToDoScreen.insertBefore(newToDO,addBtn);
    const newObject={
        todo:form,
        project:`${project}`
    };
    toDoArray.push(newObject);
    console.log(toDoArray);
    localStorage.setItem('allTodo',JSON.stringify(toDoArray));
}

mainToDoScreen.appendChild(projectIIFE.popup);
populateWindow();
navProject.addEventListener('change',populateWindow);

export default getToDoData;


