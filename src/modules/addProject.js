let projectArray=['default'];

const addOption=(e)=>{
    e.preventDefault();
    //Add new option by the buttons sibling element
    let newOption=document.createElement('option');
    newOption.text=`${e.target.previousSibling.value}`;
    projectIIFE.projectDropdown.add(newOption);
    projectIIFE.projectForm.reset();
    projectArray.push(newOption.text);
    localStorage.setItem('projects',JSON.stringify(projectArray));
    projectPopup();
}
const projectPopup=()=>{
    projectIIFE.popup.hidden=!projectIIFE.popup.hidden;
}


const projectIIFE=(()=>{
    const projectDropdown=document.getElementById('project');
    
    //Adding the popup window here
    const popup=document.createElement('div');
    popup.classList.add('popupWindow');
    popup.classList.add('projectPopup');
    popup.hidden=true;
    const closeBtn=document.createElement('button');
    closeBtn.classList.add('closePopup');
    closeBtn.classList.add('closePP');
    closeBtn.innerHTML="X";
    closeBtn.addEventListener('click',projectPopup);
    popup.appendChild(closeBtn);

    const projectFormDiv=document.createElement('div');
    projectFormDiv.classList.add('formDiv');
    const projectForm=document.createElement('form');
    
    const label=document.createElement('label');
    label.innerHTML='Project name:';

    const nameInput=document.createElement('input');
    nameInput.classList.add('projectName');
    nameInput.id="projectName";

    const sendBtn=document.createElement('button');
    sendBtn.classList.add('sendForm');
    sendBtn.innerHTML="Add project";
    sendBtn.addEventListener('click',(e)=>{addOption(e)});

    projectForm.appendChild(label);
    projectForm.appendChild(nameInput);
    projectForm.appendChild(sendBtn);

    projectFormDiv.appendChild(projectForm);
    popup.appendChild(projectFormDiv);
    
    const addProject=document.getElementById('addProject');
    addProject.addEventListener('click',projectPopup);
    console.log(localStorage.getItem('projects') !== null);
    if(localStorage.getItem('projects') !== null){
        console.log
        let projectItem=localStorage.getItem('projects');
        let projectArray=JSON.parse(projectItem);
        for(let i=1;i<projectArray.length;i++){
            let newOption=document.createElement('option');
            newOption.text=projectArray[i];
            projectDropdown.add(newOption);
        }
    }
    return {projectDropdown,popup,projectForm};
})();

export default projectIIFE;