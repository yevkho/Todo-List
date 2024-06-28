export default function createMyProjectsBase () { 
    //set baseline myProjects
    let myProjects = []
    const allTasksProject = {
        title: "All Tasks",
        todoList: [],
    }
    myProjects.push(allTasksProject);

        //reset to baseline
    function myProjectsReset () {
        myProjects.length = 0;
        myProjects.push(allTasksProject)
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
        if (projectIndex !== 0) {
            myProjects[projectIndex].todoList.push(todoItem);
        }
    }

        //splice Todo from myProjects
    function deleteTodo (todoIndex, projectIndex) {
        myProjects[0].todoList.splice(todoIndex, 1);
        myProjects[projectIndex].todoList.splice(todoIndex, 1);
    }
    
    return {myProjects, myProjectsReset, addProject, deleteProject, addTodo, deleteTodo}
}