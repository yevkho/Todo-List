import editImageIcon from "./icons/edit.svg";
import deleteImageIcon from "./icons/trash.svg";
import plus2Icon from "./icons/plus2.svg";
import poundIcon from "./icons/pound.svg";
import plusIcon from "./icons/plus.svg";
import closeIcon from "./icons/close.svg";

import createTodoItem from "./itemsfactory.js";
import createProjectItem from "./projectsfactory.js";

export default function renderWebPage(myProjectsBase, index) {
  //clear the field
  const mainSection = document.querySelector(".main");
  mainSection.replaceChildren();
  //render new page
  renderPageProject(myProjectsBase, index);
  renderPageTodoItems(myProjectsBase, index);
  renderAddTaskButton();
  configureTodoDialogButtons(myProjectsBase, index);
  renderProjectItems(myProjectsBase);
  renderAddProjectButton();
  configureProjectDialogButtons(myProjectsBase, index);
}

export function renderTodayThisWeekPage(myProjectsBase, index) {
  //clear the field
  const mainSection = document.querySelector(".main");
  mainSection.replaceChildren();
  //render new page
  renderPageProject(myProjectsBase, index);
  renderPageTodoItems(myProjectsBase, index);
  renderProjectItems(myProjectsBase);
}

//UTILITIES (Variables & Functions)

//store event-handlers for 'create' buttons in order to clear them and prevent piling up (TBD better solution)
let handleCreateButtonClick;
let handleCreateButtonClickEdit;
let handleAddButtonClick;

function setEditButton(myProjectsBase, index, todoItem, indexItem) {
  //pull up itemDialog
  const dialog = document.querySelector("#todoDialog");
  dialog.showModal();
  //populate Dialog fields with retrieved Items' values
  document.querySelector("#title").value = todoItem.title;
  document.querySelector("#descriptionText").value = todoItem.description;
  document.querySelector("#duedate").value = todoItem.dueDate;
  document.querySelector(`input[value='${todoItem.showPriority()}']`).checked =
    true;

  //Dialog 'create' button config
  const createButton = document.querySelector("#addButton");
  //clear existing eventListeners on 'create' button
  if (handleCreateButtonClick || handleCreateButtonClickEdit) {
    createButton.removeEventListener("click", handleCreateButtonClick);
    createButton.removeEventListener("click", handleCreateButtonClickEdit);
  }
  //add new eventListener that updates existing todoItem in place
  handleCreateButtonClickEdit = function (e) {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#descriptionText").value;
    const duedate = document.querySelector("#duedate").value;
    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    if (!title || !description || !duedate || !priority) {
      return;
    }
    const ItemToEdit = myProjectsBase.myProjects[index].todoList[indexItem]; //could have added as separate method in projectsBase (editTodoItem)
    ItemToEdit.title = title;
    ItemToEdit.description = description;
    ItemToEdit.dueDate = duedate;
    ItemToEdit.changePriority(priority, todoItem); //SOLUTION TBD to update the todoItem.priority property (that is passed to JSON)
    //re-render page
    if (index == 1 || index == 2) {
      renderTodayThisWeekPage(myProjectsBase, index);
    } else {
      renderWebPage(myProjectsBase, index);
    }
    localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase)); //JSON
    //clear input field(s)
    e.preventDefault(); //prevent validation after clearing and before closing
    todoForm.reset();
    todoDialog.close();
  };
  createButton.addEventListener("click", handleCreateButtonClickEdit);
}

function setDeleteButton(myProjectsBase, index, todoItem, indexItem) {
  //delete from original array
  myProjectsBase.myProjects[index].todoList.splice(indexItem, 1);
  //delete from secondary array
  myProjectsBase.myProjects.forEach(function (projectItem, ProjectIndex) {
    const secondIndex = projectItem.todoList.indexOf(todoItem);
    if (secondIndex !== -1) {
      myProjectsBase.myProjects[ProjectIndex].todoList.splice(secondIndex, 1);
    }
  });
  //re-render page
  if (index == 1 || index == 2) {
    renderTodayThisWeekPage(myProjectsBase, index);
  } else {
    renderWebPage(myProjectsBase, index);
  }
  localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase)); //JSON
}

// DOM RENDERING

function renderPageProject(myProjectsBase, index) {
  const mainSection = document.querySelector(".main");
  //set up top page anchors
  const topProjectCard = document.createElement("div");
  topProjectCard.classList.add("projectCard");
  topProjectCard.innerText = `${myProjectsBase.myProjects[index].title}`;
  const cardSection = document.createElement("div");
  cardSection.classList.add("todoCards");
  mainSection.appendChild(topProjectCard);
  mainSection.appendChild(cardSection);
}

function renderPageTodoItems(myProjectsBase, index) {
  //select cardSection
  const cardSection = document.querySelector(".todoCards");
  //iterate though myProjectsBase and render each todoItem (in the relevant project)
  myProjectsBase.myProjects[index].todoList.forEach(
    function (todoItem, indexItem) {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("todoCard");
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("left");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("taskcontent");
      const titlePara = document.createElement("p");
      titlePara.classList.add("title");
      titlePara.innerText = `${todoItem.title}`;
      const descriptionPara = document.createElement("p");
      descriptionPara.classList.add("description");
      descriptionPara.innerText = `${todoItem.description}`;
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("right");
      const duedate = document.createElement("div");
      duedate.classList.add("duedate");
      duedate.innerText = `${todoItem.dueDate}`;

      //set checkbox
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "status");
      checkbox.setAttribute("name", "status");
      //add checkbox event on 'change'
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          todoItem.toggleCompleteStatus(todoItem);
          cardDiv.style.opacity = "0.5";
        } else {
          todoItem.toggleCompleteStatus(todoItem);
          cardDiv.style.opacity = "1";
        }
        localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase));
      });
      //render checked / unchecked div
      if (todoItem.showCompleteStatus() == "open") {
        cardDiv.style.opacity = "1";
        checkbox.checked = false;
      } else if (todoItem.showCompleteStatus() == "closed") {
        cardDiv.style.opacity = "0.5";
        checkbox.checked = true;
      }

      //display task priority
      if (todoItem.showPriority() == "low") {
        cardDiv.style.borderLeft = "5px solid #adff2f";
        // cardDiv.setAttribute("style","border-left:5px solid #adff2f");
      } else if (todoItem.showPriority() == "medium") {
        cardDiv.style.borderLeft = "5px solid orange";
        // cardDiv.setAttribute("style","border-left:5px solid orange");
      } else if (todoItem.showPriority() == "high") {
        cardDiv.style.borderLeft = "5px solid red";
        // cardDiv.setAttribute("style","border-left:5px solid red");
      }

      //set editItem button
      const editButton = document.createElement("button");
      editButton.classList.add("edit");
      const editImage = document.createElement("img");
      editImage.src = editImageIcon;
      editButton.addEventListener("click", () => {
        setEditButton(myProjectsBase, index, todoItem, indexItem);
      })

      //set deleteItem button
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      const deleteImage = document.createElement("img");
      deleteImage.src = deleteImageIcon;
      // set deletion of Item from original and secondary arrays
      if (!deleteButton.dataset.listener) {
        deleteButton.addEventListener("click", () => {
          setDeleteButton(myProjectsBase, index, todoItem, indexItem);
        });
        //set identifier to only add one eventsListener per button
        deleteButton.setAttribute("data-listener", "true");
      }

      editButton.appendChild(editImage);
      deleteButton.appendChild(deleteImage);
      rightDiv.appendChild(duedate);
      rightDiv.appendChild(editButton);
      rightDiv.appendChild(deleteButton);
      taskDiv.appendChild(titlePara);
      taskDiv.appendChild(descriptionPara);
      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(taskDiv);
      cardDiv.appendChild(leftDiv);
      cardDiv.appendChild(rightDiv);
      cardSection.appendChild(cardDiv);
    }
  );
}

function renderAddTaskButton() {
  //select cardSection
  const cardSection = document.querySelector(".todoCards");
  //render '+ Add Task' button
  const addTask = document.createElement("div");
  addTask.classList.add("addtask");
  const plusIcon = document.createElement("img");
  plusIcon.src = plus2Icon;
  const addTaskPara = document.createElement("p");
  addTaskPara.innerText = "Add Task";
  addTask.appendChild(plusIcon);
  addTask.appendChild(addTaskPara);
  cardSection.appendChild(addTask);
  // calibrate add task button (show dialog)
  const dialog = document.querySelector("#todoDialog");
  addTask.addEventListener("click", () => {
    dialog.showModal();
  });
}

function configureTodoDialogButtons(myProjectsBase, index) {
  //(1)close dialog button
  const dialog = document.querySelector("#todoDialog");
  const todoForm = document.querySelector("#todoForm");
  const closeButton = document.querySelector("#closeButton");
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    todoForm.reset();
    dialog.close();
  });
  //(2)addTodoItem button
  const createButton = document.querySelector("#addButton");
  //check if handleCreateButtonClick has already been assigned and if so remove it from createButton (idem 2nd event)
  if (handleCreateButtonClick || handleCreateButtonClickEdit) {
    createButton.removeEventListener("click", handleCreateButtonClick);
    createButton.removeEventListener("click", handleCreateButtonClickEdit);
  }
  //create eventHandler that creates new todoItem,pushes, and renders it
  handleCreateButtonClick = function (e) {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#descriptionText").value;
    const duedate = document.querySelector("#duedate").value;
    console.log(duedate);
    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    let projectIndex;
    if (index !== 0 && index !== 1 && index !== 2) {
      projectIndex = index;
    }

    const completeStatus = "open";
    //exit function if one of the elements is missing
    if (!title || !description || !duedate || !priority) {
      return;
    }
    //create new todoItem
    const newItem = createTodoItem(
      title,
      description,
      duedate,
      priority,
      projectIndex,
      completeStatus,
    );
    //push new todoItem to the projects array
    myProjectsBase.addTodo(newItem, index);
    //re-render the page
    renderWebPage(myProjectsBase, index);
    localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase)); //JSON
    //clear input field(s)
    e.preventDefault();
    todoForm.reset();
    todoDialog.close();
  };
  createButton.addEventListener("click", handleCreateButtonClick);
}

//PROJECT SIDEBAR

function renderProjectItems(myProjectsBase) {
  //clear the field
  const projectCards = document.querySelector(".projectCards");
  projectCards.replaceChildren();
  //iterate through myProjectsBase and render each todoItem
  myProjectsBase.myProjects.forEach(function (projectItem, index) {
    if (index !== 0 && index !== 1 && index !== 2) {
      //to not render the default project (All Items) //NEW
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.setAttribute("data-index", `${index}`);

      //add eventlistener to each projectDiv rendering the entire webpage
      projectDiv.addEventListener("click", () => {
        renderWebPage(myProjectsBase, `${index}`);
      });

      const hashIcon = document.createElement("img");
      hashIcon.src = poundIcon;
      const titleDiv = document.createElement("div");
      titleDiv.innerText = `${projectItem.title}`;

      const closeIconImg = document.createElement("img");
      closeIconImg.src = closeIcon;
      closeIconImg.setAttribute("id", "close");
      closeIconImg.addEventListener("click", (e) => {
        //delete corresponding todoItems from the default object first (All tasks)
        myProjectsBase.myProjects[index].todoList.forEach(function (todoItem) {
          const removalIndex =
            myProjectsBase.myProjects[0].todoList.indexOf(todoItem);
          myProjectsBase.myProjects[0].todoList.splice(removalIndex, 1);
        });
        // myProjectsBase.myProjects.splice(index, 1)
        myProjectsBase.deleteProject(index);
        //prevent the above div-eventHandler triggering
        e.stopPropagation();
        //re-render page
        renderWebPage(myProjectsBase, 0);
        localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase)); //JSON
      });

      projectDiv.appendChild(hashIcon);
      projectDiv.appendChild(titleDiv);
      projectDiv.appendChild(closeIconImg);
      projectCards.appendChild(projectDiv);
    }
  });
}

function renderAddProjectButton() {
  //render '+ Add Project" button
  const projectCards = document.querySelector(".projectCards");
  const addProject = document.createElement("div");
  addProject.classList.add("project");
  addProject.setAttribute("id", "addProject");
  const plusIcon1 = document.createElement("img");
  plusIcon1.src = plusIcon;
  const addProjectPara = document.createElement("p");
  addProjectPara.innerText = "Add Project";
  const dialog = document.querySelector("#projectDialog");
  addProject.addEventListener("click", () => {
    dialog.show();
  });
  addProject.appendChild(plusIcon1);
  addProject.appendChild(addProjectPara);
  projectCards.appendChild(addProject);
}

function configureProjectDialogButtons(myProjectsBase, index) {
  //(1)close dialog button
  const projectDialog = document.querySelector("#projectDialog");
  const closeButtonProject = document.querySelector("#closeButtonProject");
  const projectForm = document.querySelector("#projectForm");
  closeButtonProject.addEventListener("click", (e) => {
    e.preventDefault();
    projectForm.reset();
    projectDialog.close();
  });
  //(2)add todoProject button
  const addButtonProject = document.querySelector("#addButtonProject");

  if (handleAddButtonClick) {
    addButtonProject.removeEventListener("click", handleAddButtonClick);
  }

  handleAddButtonClick = function (e) {
    const title = document.querySelector("#titleProject").value;
    if (!title) {
      return;
    }
    //create new projectItem
    const newProject = createProjectItem(title);
    myProjectsBase.addProject(newProject);
    renderWebPage(myProjectsBase, index);
    localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase)); //JSON
    //clear input field(s)
    e.preventDefault();
    projectForm.reset();
    projectDialog.close();
  };
  addButtonProject.addEventListener("click", handleAddButtonClick);
}