import { addNewProject, displayProject } from "./project";
import { addNewTask, displayProjectTasks, task } from "./task";
const addTaskBtn = document.querySelector(".addTaskBtn");
const form = document.querySelector(".form");
const submitTaskBtn = document.querySelector(".submitBtn");
const addProjectBtn = document.querySelector(".addProjectBtn");
const submitProjectBtn = document.querySelector(".submitProjectBtn");
const cancelProjectBtn = document.querySelector(".cancelProjectBtn");
const projectForm = document.querySelector(".projectForm");

function addTask() {
    console.log(addTaskBtn);
    addTaskBtn.addEventListener("click", () => {
        form.style.display = "flex";
        addTaskBtn.style.display = "none";
        form.reset();

    })
}
function submitTask() {
    submitTaskBtn.addEventListener("click", (e) => {

        const submitTaskBtn = document.querySelector(".submitBtn");
        let tittle = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let dueDate = document.querySelector("#dueDate").value;
        let id = submitTaskBtn.id;
        console.log(id);


        // task(tittle,description,dueDate);
        addNewTask(tittle, description, dueDate, id);
        displayProjectTasks(id);
        console.log("It works fine now theres problem in addTask")

        form.style.display = "none";
        addTaskBtn.style.display = "inline";
        form.reset();
        e.preventDefault();
    })
}
function addProject() {
    addProjectBtn.addEventListener("click", () => {
        projectForm.style.display = "flex";
        addProjectBtn.style.display = "none";
        projectForm.reset();


    })
}
function submitProject() {
    submitProjectBtn.addEventListener("click", (e) => {

        let projectName = document.querySelector("#projectName").value;
        console.log(projectName);
        addNewProject(projectName);
        displayProject();


        projectForm.style.display = "none";
        addProjectBtn.style.display = "inline";
        e.preventDefault();
        projectForm.reset();
    })
}
function cancelProject() {
    cancelProjectBtn.addEventListener("click", (e) => {
        projectForm.style.display = "none";
        addProjectBtn.style.display = "inline";
        projectForm.reset();
        e.preventDefault();
    })
}



export { addTask, submitTask, addProject, submitProject, cancelProject };