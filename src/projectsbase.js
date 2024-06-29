export default function createMyProjectsBase (returnObject) { 
    //set baseline myProjects ([0]'All Tasks', [1]'Today', [2]'This Week')
    let myProjects = []

    //use returnObject rom local storage or set up new myProjects
    if (returnObject) {
        myProjects = returnObject.myProjects

        

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