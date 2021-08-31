const link=document.createElement('link');
link.rel='stylesheet';
link.href='./media/modules/addBtn.css';

document.getElementsByTagName('HEAD')[0].appendChild(link);

const popupWindow=()=>{
    eListener.popup.hidden=false;
    console.log("hello");
}

const eListener=(()=>{
    const addBtn=document.getElementById('addBtn');
    const popup=document.getElementById('popupWindow');
    addBtn.addEventListener('click',popupWindow);
    return {addBtn,popup};
})();



export default eListener;