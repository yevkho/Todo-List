(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(354),r=t.n(o),i=t(314),c=t.n(i)()(r());c.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box; \n}\n\nbody {\n    line-height: 1.5;\n    font-family: system-ui;\n    --green-color: #059669;\n    --grey-color: #e2e8f0;\n    --gold-color: #f7ad2d;\n    --boxshadow: 2px 2px 4px 1px  rgb(0 0 0 / 10%);\n}\n\n\ndiv.container {\n    min-height: 100vh;\n    display: grid;\n    /* grid-template-columns: clamp(180px, 20%, 270px) 1fr; */\n    grid-template-columns: 250px 1fr;\n\n    /* grid-template-rows: auto 1fr; */\n    grid-template-rows: 100px 1fr;\n}\n\ndiv.header {\n    background-color: white;\n    grid-column: 1 / 3;\n\n    display: flex;\n    align-items: center;\n}\n\n.header img {\n    width: 50px;\n    color: var(--green-color);\n    margin-left: 20px;\n}\n\n.header p {\n    font-size: 2.5rem;\n    margin-left: 5px;\n}\n\n.header span {\n    color: var(--green-color);\n}\n\ndiv.sidebar {\n    background-color: var(--green-color);\n    color: white;\n    padding: 5px;\n\n}\n\n.dash {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 1.3rem;\n}\n\n.dash:hover {\n    background-color: #4cda85;\n    cursor:pointer;\n}\n\n.dash :first-child {\n    width: 25px;\n}\n\n.sidebar .project {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 5px 30px;\n    font-size: 1.1rem;\n}\n\n.sidebar .project:hover {\n    background-color: #4cda85;\n    cursor:pointer;\n}\n\n/* AIM */\n.sidebar .project img{\n    width: 15px;\n}\n\n.sidebar .project img#close{\n    margin-left: auto;\n}\n\n.sidebar .project img#close:hover{\n    background-color: rgba(255, 255, 255, 0.15);\n}\n\ndiv.main {\n    background-color: var(--grey-color);\n    padding: 30px 40px;\n}\n\n.projectCard {\n    background-color: #22c55e;\n    color: white;\n    font-size: 2.5rem;\n    padding: 10px 20px;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-shadow: var(--boxshadow);\n}\n\n.todoCards {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    \n}\n\n.todoCard {\n    background-color: white;\n    font-size: 1.2rem;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    gap: 50px;\n    padding: 10px 10px;\n}\n\n.todoCard:hover {\n    box-shadow: var(--boxshadow);\n}\n\n.left {\n    display: flex;\n    gap: 10px;\n}\n\n.right {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.taskcontent :first-child {\n    font-size: 1.2rem;\n}\n\n.taskcontent #pr{\n    font-size: 0.9rem;\n}\n\n.taskcontent :last-child {\n    font-size: 0.9rem;\n}\n\n.right .duedate {\n    font-size: 0.9rem;\n}\n\n.right button {\n    background-color: white;\n    border: none;\n    padding: 3px 5px;\n    border-radius: 20px;\n    color: white;\n    font-size: 0.8rem;\n}\n\n.right button :hover {\n    cursor:pointer;\n    background-color: rgb(234, 234, 234);\n}\n\nbutton img {\n    width: 25px;\n\n}\n\n.addtask {\n    display: flex;\n    gap: 5px;\n    padding: 5px 10px;\n}\n\n.addtask img {\n    width: 16px;\n}\n\n.addtask:hover {\n    cursor: pointer;\n    background-color: white;\n    padding: 5px 10px;\n    border-radius: 5px;\n    box-shadow: var(--boxshadow);\n}\n\n#todoDialog {\n    margin: auto;\n    padding: 10px;\n\n    border: none;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n}\n\n\n#projectDialog {\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    width: 250px;\n    background-color: var(--green-color);\n}\n\n.sectionProject {\n    display:flex;\n    justify-content: center;\n}\n\n#titleProject {\n    padding: 5px 7px;\n    border: none;\n    border-radius: 5px;;\n}\n\n#titleProject:focus {\n    outline: none;\n}\n\n.projectFormButtons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 15px;\n}\n\n.projectFormButtons button {\n    background-color: white;\n    border: none;\n    padding: 5px 20px;\n    border-radius: 12px;\n    font-size: 0.8rem;\n    cursor: pointer;\n}\n\n\n.section {\n    margin-bottom: 5px;\n}\n\n#title {\n    width: 100%;\n    padding: 3px 3px;\n}\n\n#descriptionText {\n    padding: 3px 3px;\n}\n\n#radioButtons div {\n    margin-left: 10px;\n    font-size: 0.9rem;\n}\n\n/* #description :last-child {\n    color: rgba(128, 128, 128, 0.589);\n} */\n\n.section#project {\n    display: flex;\n    gap: 10px;\n}\n\n.todoFormButtons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 15px;\n}\n\n.todoFormButtons button {\n    background-color: var(--green-color);\n    border: none;\n    padding: 5px 20px;\n    border-radius: 12px;\n    color: white;\n    font-size: 0.8rem;\n    cursor: pointer;\n}\n\n.todoFormButtons button:hover {\n    background-color: #05966898;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box; \n}\n\nbody {\n    line-height: 1.5;\n    font-family: system-ui;\n    --green-color: #059669;\n    --grey-color: #e2e8f0;\n    --gold-color: #f7ad2d;\n    --boxshadow: 2px 2px 4px 1px  rgb(0 0 0 / 10%);\n}\n\n\ndiv.container {\n    min-height: 100vh;\n    display: grid;\n    /* grid-template-columns: clamp(180px, 20%, 270px) 1fr; */\n    grid-template-columns: 250px 1fr;\n\n    /* grid-template-rows: auto 1fr; */\n    grid-template-rows: 100px 1fr;\n}\n\ndiv.header {\n    background-color: white;\n    grid-column: 1 / 3;\n\n    display: flex;\n    align-items: center;\n}\n\n.header img {\n    width: 50px;\n    color: var(--green-color);\n    margin-left: 20px;\n}\n\n.header p {\n    font-size: 2.5rem;\n    margin-left: 5px;\n}\n\n.header span {\n    color: var(--green-color);\n}\n\ndiv.sidebar {\n    background-color: var(--green-color);\n    color: white;\n    padding: 5px;\n\n}\n\n.dash {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    font-size: 1.3rem;\n}\n\n.dash:hover {\n    background-color: #4cda85;\n    cursor:pointer;\n}\n\n.dash :first-child {\n    width: 25px;\n}\n\n.sidebar .project {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 5px 30px;\n    font-size: 1.1rem;\n}\n\n.sidebar .project:hover {\n    background-color: #4cda85;\n    cursor:pointer;\n}\n\n/* AIM */\n.sidebar .project img{\n    width: 15px;\n}\n\n.sidebar .project img#close{\n    margin-left: auto;\n}\n\n.sidebar .project img#close:hover{\n    background-color: rgba(255, 255, 255, 0.15);\n}\n\ndiv.main {\n    background-color: var(--grey-color);\n    padding: 30px 40px;\n}\n\n.projectCard {\n    background-color: #22c55e;\n    color: white;\n    font-size: 2.5rem;\n    padding: 10px 20px;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    box-shadow: var(--boxshadow);\n}\n\n.todoCards {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    \n}\n\n.todoCard {\n    background-color: white;\n    font-size: 1.2rem;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    gap: 50px;\n    padding: 10px 10px;\n}\n\n.todoCard:hover {\n    box-shadow: var(--boxshadow);\n}\n\n.left {\n    display: flex;\n    gap: 10px;\n}\n\n.right {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.taskcontent :first-child {\n    font-size: 1.2rem;\n}\n\n.taskcontent #pr{\n    font-size: 0.9rem;\n}\n\n.taskcontent :last-child {\n    font-size: 0.9rem;\n}\n\n.right .duedate {\n    font-size: 0.9rem;\n}\n\n.right button {\n    background-color: white;\n    border: none;\n    padding: 3px 5px;\n    border-radius: 20px;\n    color: white;\n    font-size: 0.8rem;\n}\n\n.right button :hover {\n    cursor:pointer;\n    background-color: rgb(234, 234, 234);\n}\n\nbutton img {\n    width: 25px;\n\n}\n\n.addtask {\n    display: flex;\n    gap: 5px;\n    padding: 5px 10px;\n}\n\n.addtask img {\n    width: 16px;\n}\n\n.addtask:hover {\n    cursor: pointer;\n    background-color: white;\n    padding: 5px 10px;\n    border-radius: 5px;\n    box-shadow: var(--boxshadow);\n}\n\n#todoDialog {\n    margin: auto;\n    padding: 10px;\n\n    border: none;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n}\n\n\n#projectDialog {\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    width: 250px;\n    background-color: var(--green-color);\n}\n\n.sectionProject {\n    display:flex;\n    justify-content: center;\n}\n\n#titleProject {\n    padding: 5px 7px;\n    border: none;\n    border-radius: 5px;;\n}\n\n#titleProject:focus {\n    outline: none;\n}\n\n.projectFormButtons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 15px;\n}\n\n.projectFormButtons button {\n    background-color: white;\n    border: none;\n    padding: 5px 20px;\n    border-radius: 12px;\n    font-size: 0.8rem;\n    cursor: pointer;\n}\n\n\n.section {\n    margin-bottom: 5px;\n}\n\n#title {\n    width: 100%;\n    padding: 3px 3px;\n}\n\n#descriptionText {\n    padding: 3px 3px;\n}\n\n#radioButtons div {\n    margin-left: 10px;\n    font-size: 0.9rem;\n}\n\n/* #description :last-child {\n    color: rgba(128, 128, 128, 0.589);\n} */\n\n.section#project {\n    display: flex;\n    gap: 10px;\n}\n\n.todoFormButtons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 15px;\n}\n\n.todoFormButtons button {\n    background-color: var(--green-color);\n    border: none;\n    padding: 5px 20px;\n    border-radius: 12px;\n    color: white;\n    font-size: 0.8rem;\n    cursor: pointer;\n}\n\n.todoFormButtons button:hover {\n    background-color: #05966898;\n}"],sourceRoot:""}]);const a=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},c=[],a=0;a<n.length;a++){var d=n[a],A=o.base?d[0]+o.base:d[0],s=i[A]||0,l="".concat(A," ").concat(s);i[A]=s+1;var p=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=r(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var d=o(n,r),A=0;A<i.length;A++){var s=t(i[A]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}function o(n,e,t,o,r){let i="open";return{title:n,description:e,dueDate:t,priority:o,showPriority:()=>o,changePriority:function(n){o=n},projectIndex:r,showCompleteStatus:()=>i,toggleCompleteStatus:function(){i="open"==i?"closed":"open"}}}function r(n){let e=[];if(n)e=n.myProjects,e.forEach((function(n,e){n.cleared&&(n.cleared=!1)})),e[0].todoList.forEach((function(n,t){let r=o(n.title,n.description,n.dueDate,n.priority,n.projectIndex);e[0].todoList.splice(t,1,r),n.projectIndex&&(e[n.projectIndex].cleared||(e[n.projectIndex].todoList.length=0,e[n.projectIndex].cleared=!0),e[n.projectIndex].todoList.push(r))})),console.log(e);else{const n={title:"All Tasks",todoList:[]},t={title:"Today",todoList:[]},o={title:"This Week",todoList:[]};e.push(n),e.push(t),e.push(o)}return{myProjects:e,addProject:function(n){e.push(n)},deleteProject:function(n){e.splice(n,1)},addTodo:function(n,t){e[0].todoList.push(n),0!==t&&1!==t&&2!==t&&e[t].todoList.push(n)},deleteTodo:function(n,t){e[0].todoList.splice(n,1),e[t].todoList.splice(n,1)}}}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;const i=t.p+"2760fe3a554d85b1b8a7.svg",c=t.p+"fe41f7eb3a8aafd1d145.svg",a=t.p+"469e7f772cffd2e91e89.svg",d=t.p+"27d046eddb35f27e9127.svg",A=t.p+"41c000358850b4641642.svg",s=t.p+"70aba6b8d9b896ead303.svg";function l(n,e){document.querySelector(".main").replaceChildren(),C(n,e),f(n,e),function(){const n=document.querySelector(".todoCards"),e=document.createElement("div");e.classList.add("addtask");const t=document.createElement("img");t.src=a;const o=document.createElement("p");o.innerText="Add Task",e.appendChild(t),e.appendChild(o),n.appendChild(e);const r=document.querySelector("#todoDialog");e.addEventListener("click",(()=>{r.showModal()}))}(),function(n,e){const t=document.querySelector("#todoDialog");document.querySelector("#closeButton").addEventListener("click",(n=>{n.preventDefault(),t.close()}));const r=document.querySelector("#addButton");(u||m)&&(r.removeEventListener("click",u),r.removeEventListener("click",m)),u=function(t){const r=document.querySelector("#title").value,i=document.querySelector("#descriptionText").value,c=document.querySelector("#duedate").value;console.log(c);const a=document.querySelector('input[name="priority"]:checked').value;let d;if(0!==e&&1!==e&&2!==e&&(d=e),!(r&&i&&c&&a))return;const A=o(r,i,c,a,d);n.addTodo(A,e),l(n,e),localStorage.setItem("myProjectsBase",JSON.stringify(n))},r.addEventListener("click",u)}(n,e),B(n),function(){const n=document.querySelector(".projectCards"),e=document.createElement("div");e.classList.add("project"),e.setAttribute("id","addProject");const t=document.createElement("img");t.src=A;const o=document.createElement("p");o.innerText="Add Project";const r=document.querySelector("#projectDialog");e.addEventListener("click",(()=>{r.show()})),e.appendChild(t),e.appendChild(o),n.appendChild(e)}(),function(n,e){const t=document.querySelector("#projectDialog");document.querySelector("#closeButtonProject").addEventListener("click",(n=>{n.preventDefault(),t.close()}));const o=document.querySelector("#addButtonProject");g&&o.removeEventListener("click",g),g=function(t){const o=document.querySelector("#titleProject").value;if(!o)return;const r=function(n){return{title:n,todoList:[]}}(o);n.addProject(r),console.log(n),l(n,e),localStorage.setItem("myProjectsBase",JSON.stringify(n))},o.addEventListener("click",g)}(n,e)}function p(n,e){document.querySelector(".main").replaceChildren(),C(n,e),f(n,e),B(n)}let u,m,g;function C(n,e){const t=document.querySelector(".main"),o=document.createElement("div");o.classList.add("projectCard"),o.innerText=`${n.myProjects[e].title}`;const r=document.createElement("div");r.classList.add("todoCards"),t.appendChild(o),t.appendChild(r)}function f(n,e){const t=document.querySelector(".todoCards");n.myProjects[e].todoList.forEach((function(o,r){const a=document.createElement("div");a.classList.add("todoCard");const d=document.createElement("div");d.classList.add("left");const A=document.createElement("input");A.setAttribute("type","checkbox"),A.setAttribute("id","status"),A.setAttribute("name","status"),A.setAttribute("value","open");const s=document.createElement("div");s.classList.add("taskcontent");const g=document.createElement("p");g.classList.add("title"),g.innerText=`${o.title}`;const C=document.createElement("p");C.classList.add("description"),C.innerText=`${o.description}`;const f=document.createElement("div");f.classList.add("right");const B=document.createElement("div");B.classList.add("duedate"),B.innerText=`${o.dueDate}`,"low"==o.showPriority()?a.setAttribute("style","border-left:5px solid #adff2f"):"medium"==o.showPriority()?a.setAttribute("style","border-left:5px solid orange"):"high"==o.showPriority()&&a.setAttribute("style","border-left:5px solid red");const x=document.createElement("button");x.classList.add("edit");const h=document.createElement("img");h.src=i,x.addEventListener("click",(()=>{document.querySelector("#todoDialog").showModal(),console.log(o.title),document.querySelector("#title").value=o.title,console.log(o.description),document.querySelector("#descriptionText").value=o.description,console.log(o.dueDate),document.querySelector("#duedate").value=o.dueDate,console.log(o.showPriority()),document.querySelector(`input[value='${o.showPriority()}']`).checked=!0;const t=document.querySelector("#addButton");(u||m)&&(t.removeEventListener("click",u),t.removeEventListener("click",m)),m=function(t){const o=document.querySelector("#title").value,i=document.querySelector("#descriptionText").value,c=document.querySelector("#duedate").value,a=document.querySelector('input[name="priority"]:checked').value;if(!(o&&i&&c&&a))return;const d=n.myProjects[e].todoList[r];d.title=o,d.description=i,d.dueDate=c,d.changePriority(a),1==e||2==e?p(n,e):l(n,e),localStorage.setItem("myProjectsBase",JSON.stringify(n))},t.addEventListener("click",m)}));const I=document.createElement("button");I.classList.add("delete");const b=document.createElement("img");b.src=c,I.dataset.listener||(I.addEventListener("click",(()=>{n.myProjects[e].todoList.splice(r,1),n.myProjects.forEach((function(e,t){const r=e.todoList.indexOf(o);-1!==r&&n.myProjects[t].todoList.splice(r,1)})),1==e||2==e?p(n,e):l(n,e),localStorage.setItem("myProjectsBase",JSON.stringify(n))})),I.setAttribute("data-listener","true")),x.appendChild(h),I.appendChild(b),f.appendChild(B),f.appendChild(x),f.appendChild(I),s.appendChild(g),s.appendChild(C),d.appendChild(A),d.appendChild(s),a.appendChild(d),a.appendChild(f),t.appendChild(a)}))}function B(n){const e=document.querySelector(".projectCards");e.replaceChildren(),n.myProjects.forEach((function(t,o){if(0!==o&&1!==o&&2!==o){const r=document.createElement("div");r.classList.add("project"),r.setAttribute("data-index",`${o}`),r.addEventListener("click",(()=>{l(n,`${o}`)}));const i=document.createElement("img");i.src=d;const c=document.createElement("div");c.innerText=`${t.title}`;const a=document.createElement("img");a.src=s,a.setAttribute("id","close"),a.addEventListener("click",(e=>{n.myProjects[o].todoList.forEach((function(e){const t=n.myProjects[0].todoList.indexOf(e);n.myProjects[0].todoList.splice(t,1)})),n.myProjects.splice(o,1),console.log(n),e.stopPropagation(),l(n,0),localStorage.setItem("myProjectsBase",JSON.stringify(n))})),r.appendChild(i),r.appendChild(c),r.appendChild(a),e.appendChild(r)}}))}function x(n){return function(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}(n,Date.now())}function h(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}function I(n){const e=h(n);return e.setHours(0,0,0,0),e}function b(n){return e=n,t=x(n),+I(e)==+I(t);var e,t}let y={};function v(){return y}function j(n,e){const t=v(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=h(n),i=r.getDay(),c=(i<o?7:0)+i-o;return r.setDate(r.getDate()-c),r.setHours(0,0,0,0),r}function E(n,e){return function(n,e,t){return+j(n,t)==+j(e,t)}(n,x(n),e)}function k(n){n.myProjects[1].todoList.length=0,n.myProjects[2].todoList.length=0,n.myProjects[0].todoList.forEach((function(e){const t=e.dueDate,[o,r,i]=t.split("-").map(Number),c=new Date(o,r-1,i);b(c)&&n.myProjects[1].todoList.push(e),E(c,{weekStartsOn:1})&&n.myProjects[2].todoList.push(e)}))}var w=t(72),S=t.n(w),L=t(825),P=t.n(L),q=t(659),T=t.n(q),D=t(56),z=t.n(D),Y=t(540),O=t.n(Y),N=t(113),W=t.n(N),F=t(365),M={};let Z;if(M.styleTagTransform=W(),M.setAttributes=z(),M.insert=T().bind(null,"head"),M.domAPI=P(),M.insertStyleElement=O(),S()(F.A,M),F.A&&F.A.locals&&F.A.locals,localStorage.getItem("myProjectsBase")){console.log("full");let n=localStorage.getItem("myProjectsBase");n=JSON.parse(n),Z=r(n)}else console.log("empty"),Z=r(),localStorage.setItem("myProjectsBase",JSON.stringify(Z));console.log(Z),l(Z,0),document.querySelector("#homeButton").addEventListener("click",(()=>{l(Z,0)})),document.querySelector("#todayButton").addEventListener("click",(()=>{k(Z),p(Z,1)})),document.querySelector("#thisWeekButton").addEventListener("click",(()=>{k(Z),p(Z,2)}))})();
//# sourceMappingURL=main.js.map