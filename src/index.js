import createMyProjectsBase from './projectsbase.js';
import renderWebPage from './renderWebPage.js';
import renderTodayPage from './renderTodayPage.js';
import './styles.css';


//(1) Set up MyProjects object
let myProjectsBase = createMyProjectsBase();
console.log(myProjectsBase)

//(2) render HOME page
//MAIN at launch
renderWebPage (myProjectsBase, 0)
//configure HOME button
const homButton = document.querySelector('#homeButton');
homButton.addEventListener('click', ()=> {
    renderWebPage (myProjectsBase, 0);
})


//(3)configure Today button
const todayButton = document.querySelector('#todayButton');
todayButton.addEventListener('click', () => {
    renderTodayPage(myProjectsBase);
})

