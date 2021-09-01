import getToDoData from "../index";

const link=document.createElement('link');
link.rel='stylesheet';
link.href='./media/modules/addBtn.css';


document.getElementsByTagName('HEAD')[0].appendChild(link);

const popupWindow=()=>{
    eListener.popup.hidden=false;
    console.log("hello");
}
const closePopup=()=>{
    eListener.popup.hidden=true;
}

const addToDo=(e)=>{
    //sends data to index.js
    const formData = new FormData(e.target.parentNode);
    const formProps = Object.fromEntries(formData);
    getToDoData(formProps);
    eListener.form.reset();
    closePopup();
}

const eListener=(()=>{
    //Adding values in IIFE
    const addBtn=document.getElementById('addBtn');
    const popup=document.getElementById('popupWindow');
    addBtn.addEventListener('click',popupWindow);

    const form=document.getElementById('popupForm')
    
    const sendForm=document.getElementById('sendForm');
    sendForm.addEventListener('click',(e)=>{
        e.preventDefault();
        addToDo(e)});
    
    const closeBtn=document.getElementById('closePopup');
    closeBtn.addEventListener('click',closePopup);

    return {addBtn,popup,form};
})();



export default eListener;