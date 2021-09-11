

const todayWindow=document.getElementById('today');

const todayIIFE=(()=>{
    const link=document.createElement('link');
        link.rel='stylesheet';
        link.href='./media/modules/today.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
})();

const addTodayElement=(form)=>{
    

    const newTItem=document.createElement('div');
        newTItem.classList.add('todayItem');
        newTItem.innerHTML=`<h1>${form.title}</h1>
                            <p>${form.priority}</p>`;
    todayWindow.appendChild(newTItem);
}

export {todayIIFE,addTodayElement};