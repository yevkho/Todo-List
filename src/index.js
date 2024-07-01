import createMyProjectsBase from './projectsbase.js';
import renderWebPage from './renderWebPage.js';
import {renderTodayThisWeekPage} from './renderWebPage.js';
import compileTodayAndThisWeek from './compileTodayThisWeek.js';
import './styles.css';

//(1) Set up MyProjects object
let myProjectsBase;

//check for local storage
if (localStorage.getItem('myProjectsBase')) {
    console.log('full')   
    //pulling from storage and parsing 
    let returnObject = localStorage.getItem('myProjectsBase');
    returnObject = JSON.parse(returnObject);
    myProjectsBase = createMyProjectsBase (returnObject);
  } else {
    console.log('empty')
    //set up MyProjects object for the first time
    myProjectsBase = createMyProjectsBase();
    //stringifying and pushing to storage
    localStorage.setItem('myProjectsBase', JSON.stringify(myProjectsBase));
}
console.log(myProjectsBase);

//(2) render HOME page at launch
renderWebPage (myProjectsBase, 0)

//(3)configure HOME button
const homButton = document.querySelector('#homeButton');
homButton.addEventListener('click', ()=> {
    renderWebPage (myProjectsBase, 0);
})

//(3)configure TODAY button
const todayButton = document.querySelector('#todayButton');
todayButton.addEventListener('click', () => {
    compileTodayAndThisWeek(myProjectsBase)
    renderTodayThisWeekPage (myProjectsBase, 1)
})

//(4)configure THIS-WEEK button
const thisWeekButton = document.querySelector('#thisWeekButton');
thisWeekButton.addEventListener('click', () => {
    compileTodayAndThisWeek(myProjectsBase);
    renderTodayThisWeekPage (myProjectsBase, 2)
})