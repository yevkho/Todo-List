export default function createTodoItem (title, description, dueDate, priority, projectIndex) {
    let completeStatus = "open"
    
    const showPriority = () => priority;
    function changePriority (newPriority) {
        priority = newPriority;
    }

    const showCompleteStatus  = () => completeStatus;
    function toggleCompleteStatus () {
        completeStatus == "open" ? completeStatus = "closed" :  completeStatus = "open";
    }
    
    return {title, description, dueDate, priority, showPriority, changePriority, projectIndex, showCompleteStatus, toggleCompleteStatus}
}