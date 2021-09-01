import {toDoObject,deleteToDoEvent} from "./modules/toDoObject";
import eListener from "./modules/addBtn";

const mainToDoScreen=document.getElementById('mainToDoScreen');
const addBtn=document.getElementById('addBtn');
for (let i=0;i<10;i++){
    mainToDoScreen.insertBefore(toDoObject('test','test desc',new Date().toString(),'1'),addBtn);
}

const getToDoData=(form)=>{
    //sends data to toDoObject.js
    console.log(form);
    const newToDO=toDoObject(form.title,form.description,form.date,form.priority);
    mainToDoScreen.insertBefore(newToDO,addBtn);
}

export default getToDoData;


