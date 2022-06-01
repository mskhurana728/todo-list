import { projects } from "./project";


function task(tittle, description, dueDate) {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    // return(tittle,description,dueDate);

}
function addNewTask(tittle, description, dueDate, id) {
    let newTask = new task(tittle, description, dueDate);
    console.log("in add new task " + newTask);
    console.log(projects[id]);
    projects[id].push(newTask);

    console.log(projects[id]);

}

function displayProjectTasks(id) {
    const taskArea = document.querySelector(".taskArea");
    let i = 1;
    taskArea.textContent = "";
    if (projects[id].length > 1) {
        projects[id].forEach(project => {
            if(project.tittle){
                const task = document.createElement("div");
                task.classList.add("task");
                task.id=i;

                const taskInfo= document.createElement("p");
                taskInfo.textContent=project.tittle +"  "+project.description+"  "+project.dueDate;

                // const description = document.createElement("p");
                task.appendChild(taskInfo);
                taskArea.appendChild(task);


            // taskArea.textContent += project.tittle+"  ";
            i++;
        }
        });
    }


}

export { displayProjectTasks, task, addNewTask };