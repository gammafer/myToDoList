import {toDoObject,deleteToDoEvent} from "./modules/toDoObject";
import eListener from "./modules/addBtn";
import projectIIFE from "./modules/addProject";

const mainToDoScreen=document.getElementById('mainToDoScreen');
const addBtn=document.getElementById('addBtn');

const getToDoData=(form)=>{
    //sends data to toDoObject.js
    console.log(form);
    const newToDO=toDoObject(form.title,form.date,form.priority,form.description,form.project);
    mainToDoScreen.insertBefore(newToDO,addBtn);
}

mainToDoScreen.appendChild(projectIIFE.popup);

export default getToDoData;


