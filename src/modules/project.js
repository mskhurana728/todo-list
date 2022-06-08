import { addNewTask, displayProjectTasks } from "./task";

const projectsArea = document.querySelector(".projects");

let projects = [];

function addNewProject(name) {
  projects.push([name]);
}

function displayProject() {
  projectsArea.textContent = "";
  let i = 0;
  projects.forEach((project) => {
    console.log(project);

    const newProjectDiv = document.createElement("div");
    const removeBtn = document.createElement("button");
    const para = document.createElement("p");
    const submitTaskBtn = document.querySelector(".submitBtn");
    const addTaskBtn = document.querySelector(".addTaskBtn");
    const taskArea = document.querySelector(".taskArea");

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
      let paras = document.querySelectorAll(".projectPara");
      console.log(paras + "paras here");
      paras.forEach((x) => {
        x.classList.remove("active");
      });
      para.classList.add("active");
      console.log(para);

      let id = para.getAttribute("id");
      console.log(id);
      submitTaskBtn.id = id;
      console.log(submitTaskBtn);
      displayProjectTasks(id);

      addTaskBtn.style.display = "inline";
      taskArea.textContent = "";
     
    });

    removeBtn.addEventListener("click", () => {
      let index = removeBtn.getAttribute("id");
      let id = para.getAttribute("id");
      console.log(index);
      console.log(id);
      projects.splice(index, 1);
      submitTaskBtn.id = id;
      addTaskBtn.style.display = "none";
      taskArea.innerHTML =
        "SELECT A PROJECT <br>IF THERE IS NO PROJECT PLEASE CREATE ONE";

      displayProject();
    });

    i++;
  });
}

export { addNewProject, displayProject, projects };
