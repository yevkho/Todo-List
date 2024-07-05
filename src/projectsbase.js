import createTodoItem from "./itemsfactory";
import createProjectItem from "./projectsfactory";
import { isToday, isThisWeek } from "date-fns";

export default function createMyProjectsBase(returnObject) {
  //set baseline myProjects ([0]'All Tasks', [1]'Today', [2]'This Week')
  let myProjects = [];

  function buildMyProjectsBaseFromMemory() {
    myProjects = returnObject.myProjects;
    //reset the 'cleared' property for each project array
    myProjects.forEach(function (projectItem) {
      if (projectItem.cleared) {
        projectItem.cleared = false;
      }
    });
    //construct new todoItems and push them into the default (All Tasks) and secondary projects
    myProjects[0].todoList.forEach(function (todoItem, todoIndex) {
      let newTodoItem = createTodoItem(
        todoItem.title,
        todoItem.description,
        todoItem.dueDate,
        todoItem.priority,
        todoItem.projectIndex,
        todoItem.completeStatus,
      );
      myProjects[0].todoList.splice(todoIndex, 1, newTodoItem); //could have used map and assign new array
      if (todoItem.projectIndex) {
        if (!myProjects[todoItem.projectIndex].cleared) {
          // Clear the array once and mark as cleared
          myProjects[todoItem.projectIndex].todoList.length = 0;
          myProjects[todoItem.projectIndex].cleared = true;
        }
        myProjects[todoItem.projectIndex].todoList.push(newTodoItem);
      }
    });
  }

  //use returnObject from local storage or set up new myProjects
  if (returnObject) {
    //if returnObject retrieved from memory, use it to construct 'myProjectsBase'
    buildMyProjectsBaseFromMemory();
  } else {
    //else create a new one
    myProjects.push(createProjectItem("All Tasks"));
    myProjects.push(createProjectItem("Today"));
    myProjects.push(createProjectItem("This Week"));
  }

  //push new Project to myProjects
  function addProject(projectItem) {
    myProjects.push(projectItem);
  }

  //splice Project from myProjects
  function deleteProject(projectIndex) {
    myProjects.splice(projectIndex, 1);
  }

  //push new Todo to myProjects (allTasks and target Project)
  function addTodo(todoItem, projectIndex) {
    myProjects[0].todoList.push(todoItem);
    if (projectIndex !== 0 && projectIndex !== 1 && projectIndex !== 2) {
      //NEW
      myProjects[projectIndex].todoList.push(todoItem);
    }
  }

  //splice Todo from myProjects
  function deleteTodo(todoIndex, projectIndex) {
    myProjects[0].todoList.splice(todoIndex, 1);
    myProjects[projectIndex].todoList.splice(todoIndex, 1);
  }

  function compileTodayAndThisWeek() {
    //reset the 'today - [1]' and 'thisWeek - [2]' arrays
    myProjects[1].todoList.length = 0;
    myProjects[2].todoList.length = 0;
    //loop though each todoItem in the default object (All Tasks) and filter items that are 'today'
    //or 'this week'
    myProjects[0].todoList.forEach(function (todoItem) {
      //convert dueDate form input to 'today' object (NOTE: could have put this in todoItem factory)
      const todoItemDateString = todoItem.dueDate;
      const [todoItemYear, todoItemMonth, todoItemDay] = todoItemDateString
        .split("-")
        .map(Number);
      const todoItemDateObject = new Date(
        todoItemYear,
        todoItemMonth - 1,
        todoItemDay,
      );
      //check if item's date is today (return boolean)
      const isTodayBoolean = isToday(todoItemDateObject);
      //push 'today' items into the new Object/Array
      if (isTodayBoolean) {
        myProjects[1].todoList.push(todoItem);
      }
      //mirror for thisWeek
      const isThisWeekBoolean = isThisWeek(todoItemDateObject, {
        weekStartsOn: 1,
      });
      if (isThisWeekBoolean) {
        myProjects[2].todoList.push(todoItem);
      }
    });
  }

  return {
    myProjects,
    addProject,
    deleteProject,
    addTodo,
    deleteTodo,
    compileTodayAndThisWeek,
  };
}
