import { addNewTask, displayProjectTasks } from "./task";

const projectsArea = document.querySelector(".projects");

let projects = [];



// function Project(name) {
//     return { name };
// }

function addNewProject(name) {

    // let newProject = Project(name);

    projects.push([name]);

    console.log(projects);

}


function displayProject() {
    projectsArea.textContent = "";
    let i = 0;
    projects.forEach(project => {
        console.log(project);

        const newProjectDiv = document.createElement("div");
        const removeBtn = document.createElement("button");
        const para = document.createElement("p");
        const submitTaskBtn = document.querySelector(".submitBtn");

        newProjectDiv.classList.add("projectDiv");
        newProjectDiv.id = i;

        para.classList.add("projectPara");
        para.textContent = project[0];
        para.id = i;

        removeBtn.classList.add("removeBtn");
        removeBtn.id = i;
        removeBtn.textContent = "X";

        newProjectDiv.appendChild(para);
        newProjectDiv.appendChild(removeBtn);
        console.log(newProjectDiv);
        projectsArea.appendChild(newProjectDiv);

        para.addEventListener("click", () => {
            let id = para.getAttribute("id");
            console.log(id);
            submitTaskBtn.id=id;
            console.log(submitTaskBtn);
            displayProjectTasks(id);
        })


        removeBtn.addEventListener("click", () => {
            let index = removeBtn.getAttribute("id");
            console.log(index);
            projects.splice(index, 1);
            displayProject();
        })

        i++;

    });
}


export { addNewProject, displayProject ,projects};