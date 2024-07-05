import createMyProjectsBase from "./projectsbase.js";
import renderWebPage from "./renderWebPage.js";
import { renderTodayThisWeekPage } from "./renderWebPage.js";
import "./styles.css";

//(1) Set up MyProjects object
let myProjectsBase;

//check for local storage
if (localStorage.getItem("myProjectsBase")) {
  //pulling myProjectsBase from storage
  let returnObject = JSON.parse(localStorage.getItem("myProjectsBase"));
  //use stored object to generate myProjectsBase
  myProjectsBase = createMyProjectsBase(returnObject);
} else {
  //set up myProjects object for the first time
  myProjectsBase = createMyProjectsBase();
  //stringify and push to storage
  localStorage.setItem("myProjectsBase", JSON.stringify(myProjectsBase));
}

//(2) render HOME page at launch
renderWebPage(myProjectsBase, 0);

//(3)configure HOME button
const homButton = document.querySelector("#homeButton");
homButton.addEventListener("click", () => {
  renderWebPage(myProjectsBase, 0);
});

//(3)configure TODAY button
const todayButton = document.querySelector("#todayButton");
todayButton.addEventListener("click", () => {
  myProjectsBase.compileTodayAndThisWeek();
  renderTodayThisWeekPage(myProjectsBase, 1);
});

//(4)configure THIS-WEEK button
const thisWeekButton = document.querySelector("#thisWeekButton");
thisWeekButton.addEventListener("click", () => {
  myProjectsBase.compileTodayAndThisWeek();
  renderTodayThisWeekPage(myProjectsBase, 2);
});
