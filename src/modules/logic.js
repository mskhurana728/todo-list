const addTaskBtn= document.querySelector(".addTaskBtn");
const form= document.querySelector(".form");
const submitTaskBtn = document.querySelector(".submitBtn");
function addTask(){
    console.log(addTaskBtn);
    addTaskBtn.addEventListener("click",()=>{
        form.style.display="flex";
        addTaskBtn.style.display="none";
        
    })
}
function submitTask(){
    submitTaskBtn.addEventListener("click",(e)=>{
        form.style.display="none";
        addTaskBtn.style.display="inline";
        e.preventDefault();
    })
}
export {addTask,submitTask};