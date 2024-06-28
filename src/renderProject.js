// import poundIcon from "./icons/pound.svg";
// import plusIcon from "./icons/plus.svg";

// export default function renderProjectItems (myProjectsBase) {
//     //clear the field
//     const projectCards = document.querySelector(".projectCards");
//     projectCards.replaceChildren();

//     //iterate though myProjectsBase and render each todoItem
//     myProjectsBase.myProjects.forEach(function (projectItem, index) {
//         if (index !== 0) { //to not render the default project (All Items)
//             const projectDiv = document.createElement('div')
//             projectDiv.classList.add('project')

//             const hashIcon = document.createElement('img')
//             hashIcon.src = poundIcon;

//             const titleDiv = document.createElement('div')
//             titleDiv.innerText = `${projectItem.title}`

//             projectDiv.appendChild(hashIcon);
//             projectDiv.appendChild(titleDiv);
//             projectCards.appendChild(projectDiv);
//         }
//     })

//     //render '+ Add Project" button
//     const addProject = document.createElement('div')
//     addProject.classList.add('project')
//     addProject.setAttribute("id","addProject");

//     const plusIcon1 = document.createElement('img')
//     plusIcon1.src = plusIcon;

//     const addProjectPara = document.createElement('p')
//     addProjectPara.innerText = "Add Project";
            
//     const dialog = document.querySelector("#projectDialog");
//     addProject.addEventListener('click', () => {
//         dialog.show();
//     })
            
//     addProject.appendChild(plusIcon1);
//     addProject.appendChild(addProjectPara);
//     projectCards.appendChild(addProject);
// }
