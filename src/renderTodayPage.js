import { isToday } from "date-fns";
import renderWebPage from './renderWebPage.js';

export default function renderTodayPage(myProjectsBase){

    console.log(myProjectsBase.myProjects[0].todoList)

    //define new (empty)rendering Object/Array (in the format previously defined)
    const myProjectsBaseToday = {myProjects:[{title: "Today", todoList: []}]};

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
            myProjectsBaseToday.myProjects[0].todoList.push(todoItem)
        }
    })
    console.log(myProjectsBaseToday.myProjects[0].todoList)
    //call renderWebpage function with new Object/Array
    renderWebPage (myProjectsBaseToday, 0)

    //remove add task option for the page
    const addTaskBar = document.querySelector('.addtask');
    addTaskBar.remove();
}






    //define 'Today'
    // const todayDate = new Date();
    // const [todayMonth, todayDay, todayYear] = [todayDate.getMonth(), todayDate.getDate(), todayDate.getFullYear(),];
    // console.log(todayMonth, todayDay, todayYear);