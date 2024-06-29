import { isToday, isThisWeek } from "date-fns";

export default function compileTodayAndThisWeek(myProjectsBase){
    //reset the 'today' and 'thisWeek' arrays
    myProjectsBase.myProjects[1].todoList.length = 0;
    myProjectsBase.myProjects[2].todoList.length = 0;
    //loop though each todoItem in the default object (All Tasks) and filter items that are 'today'
    myProjectsBase.myProjects[0].todoList.forEach(function (todoItem) {
        //convert dueDate form input to 'today' object
        const todoItemDateString = todoItem.dueDate;
        const [todoItemYear, todoItemMonth, todoItemDay] = todoItemDateString.split('-').map(Number);
        const todoItemDateObject = new Date(todoItemYear, todoItemMonth - 1, todoItemDay);
        //check if item's date is today (return boolean)
        const isTodayBoolean = isToday(todoItemDateObject);
        //push 'today' items into the new Object/Array 
        if (isTodayBoolean) {
            myProjectsBase.myProjects[1].todoList.push(todoItem)
        }
        //mirror for thisWeek
        const isThisWeekBoolean = isThisWeek(todoItemDateObject, { weekStartsOn: 1 });
        if (isThisWeekBoolean) {
            myProjectsBase.myProjects[2].todoList.push(todoItem)
        }
    })
}