//Adding style to head here
const link=document.createElement('link');
link.rel='stylesheet';
link.href='./media/modules/todo.css';

document.getElementsByTagName('HEAD')[0].appendChild(link);
const toDoObject=(title, description, dueDate, priority)=>{
    const toDoObject=document.createElement('div');
        toDoObject.classList.add('todoObject');

    const deleteToDo=document.createElement('button');
        deleteToDo.innerHTML='X';
        //deleteToDo.classList.add('deleteToDo');
        


        toDoObject.innerHTML=
                `<ul class='toDoData'>
                    <li class='tTitle'><h1>${title}</h1></li>
                    <li class='subData tdescription'>${description}</li>
                    <li class='subData tdueDate'>${dueDate}</li>
                    <li class='subData tpriority'>${priority}</li>
                </ul>`
    toDoObject.insertBefore(deleteToDo,toDoObject.childNodes[0]);
    const doneBtn=document.createElement('button');
        doneBtn.classList.add('doneBtn');
        doneBtn.innerHTML='Done';
        toDoObject.appendChild(doneBtn);
    

    return toDoObject;
}

export default toDoObject;