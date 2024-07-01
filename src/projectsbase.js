import createTodoItem from './itemsfactory';

export default function createMyProjectsBase (returnObject) { 
    //set baseline myProjects ([0]'All Tasks', [1]'Today', [2]'This Week')
    let myProjects = []

    //use returnObject from local storage or set up new myProjects
    if (returnObject) {
        myProjects = returnObject.myProjects
        //reset the 'cleared' property for each project array 
        myProjects.forEach(function (projectItem, projectIndex) {
            if(projectItem.cleared) {
                projectItem.cleared = false;
            }
        })
        //construct new todoItems and push them into the default (All Tasks) and secondary projects
        myProjects[0].todoList.forEach(function (todoItem, todoIndex) {
            let newTodoItem = createTodoItem(todoItem.title, todoItem.description, todoItem.dueDate, todoItem.priority, todoItem.projectIndex, todoItem.completeStatus);
            myProjects[0].todoList.splice(todoIndex, 1, newTodoItem);
            if (todoItem.projectIndex) {
                if (!myProjects[todoItem.projectIndex].cleared) { // Clear the array once and mark as cleared
                    myProjects[todoItem.projectIndex].todoList.length = 0; 
                    myProjects[todoItem.projectIndex].cleared = true;
                }
                myProjects[todoItem.projectIndex].todoList.push(newTodoItem);
            }

        })
        console.log(myProjects);
    } else {
        const allTasksProject = {
            title: "All Tasks",
            todoList: [],
        }
        const TodayProject = {
            title: "Today",
            todoList: [],
        }
        const thisWeekProject = {
            title: "This Week",
            todoList: [],
        }
        myProjects.push(allTasksProject);
        myProjects.push(TodayProject);
        myProjects.push(thisWeekProject);
    }

    //push new Project to myProjects
    function addProject (projectItem) {
        myProjects.push(projectItem);
    }

        //splice Project from myProjects
    function deleteProject (projectIndex) {
        myProjects.splice(projectIndex, 1);
    }

    //push new Todo to myProjects (allTasks and target Project)
    function addTodo (todoItem, projectIndex) {
        myProjects[0].todoList.push(todoItem);
        if (projectIndex !== 0 && projectIndex !== 1 && projectIndex !== 2) { //NEW
            myProjects[projectIndex].todoList.push(todoItem);
        }
    }

        //splice Todo from myProjects
    function deleteTodo (todoIndex, projectIndex) {
        myProjects[0].todoList.splice(todoIndex, 1);
        myProjects[projectIndex].todoList.splice(todoIndex, 1);
    }
    
    return {myProjects, addProject, deleteProject, addTodo, deleteTodo}
}