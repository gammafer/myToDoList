import {toDoObject,deleteToDoEvent} from "./modules/toDoObject";
import eListener from "./modules/addBtn";

const mainToDoScreen=document.getElementById('mainToDoScreen');
const addBtn=document.getElementById('addBtn');
for (let i=0;i<10;i++){
    mainToDoScreen.insertBefore(toDoObject('test','test desc',new Date().toString(),'1'),addBtn);
}


