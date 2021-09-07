

//Adding style to head here
const link=document.createElement('link');
link.rel='stylesheet';
link.href='./media/modules/todo.css';

document.getElementsByTagName('HEAD')[0].appendChild(link);
const toDoObject=(title, dueDate, priority, description, project)=>{
    const toDoObject=document.createElement('div');
        toDoObject.classList.add('todoObject');

    const deleteToDo=document.createElement('button');
        deleteToDo.innerHTML='X';
        deleteToDo.id='deleteToDo';
        deleteToDo.addEventListener('click',function(e){deleteToDoEvent(e)});
        //deleteToDo.classList.add('deleteToDo');
        


        toDoObject.innerHTML=
                `<ul class='toDoData'>
                    <li class='tTitle'><h1>${title}</h1></li>
                    <li class='subData tdueDate'>${dueDate}</li>
                    <li class='subData tpriority'>${priority}</li>
                    <li class='subData tdescription'>${description}</li>
                    </ul>`
    toDoObject.insertBefore(deleteToDo,toDoObject.childNodes[0]);
    const doneBtn=document.createElement('button');
        doneBtn.classList.add('doneBtn');
        doneBtn.addEventListener('click',(e)=>deleteToDoEvent(e));
        doneBtn.innerHTML='Done';
        toDoObject.appendChild(doneBtn);
    

    return toDoObject;
}
const deleteToDoEvent=(e)=>{
    let target=e.target;
    let parent=e.target.parentNode;
    parent.animate({opacity:0}
  , 1000);
    parent.remove();
}

export {toDoObject,deleteToDoEvent};