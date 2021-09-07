const todayWindow=document.getElementById('today');

const addTodayElement=(form)=>{
    const newTItem=document.createElement('div');
    newTItem.classList.add('todayItem');
    newTItem.innerHTML=`<h1>${form.title}</h1>
                        <p>${form.priority}</p>`;
    todayWindow.appendChild(newTItem);
}

export default addTodayElement;