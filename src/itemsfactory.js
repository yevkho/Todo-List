export default function createTodoItem (title, description, dueDate, priority, projectIndex, completeStatus) {
   
    const showPriority = () => priority;
    function changePriority (newPriority, todoItem) { //passing todoItem to solve JSON issue (TBD)
        priority = newPriority;
        todoItem.priority = newPriority;
    }

    const showCompleteStatus  = () => completeStatus;
    function toggleCompleteStatus (todoItem) {//passing todoItem to solve JSON issue (TBD)
        completeStatus == "open" ? completeStatus = "closed" :  completeStatus = "open";
        todoItem.completeStatus = completeStatus;
    }

    return {title, description, dueDate, priority, showPriority, changePriority, projectIndex, completeStatus, showCompleteStatus, toggleCompleteStatus}
}