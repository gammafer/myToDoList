
const toDoObject=(title, description, dueDate, priority)=>{
    const toDoObject=document.createElement('div');
    toDoObject.classList.add('todoObject');
    toDoObject.innerHTML=title+description+dueDate+priority;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='./todo.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    return toDoObject;
}

export default toDoObject;