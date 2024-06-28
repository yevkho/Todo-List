export default function createTodoItem (title, description, dueDate, priority, projectParent) {
    let completeStatus = "open"

    const showPriority = () => priority;
    function changePriority (newPriority) {
        priority = newPriority;
    }
    
    const showCompleteStatus  = () => completeStatus;
    function toggleCompleteStatus () {
        completeStatus == "open" ? completeStatus = "closed" :  completeStatus = "open"; //shorten
    }

    return {title, description, dueDate, showPriority, changePriority, showCompleteStatus, toggleCompleteStatus, projectParent}
}