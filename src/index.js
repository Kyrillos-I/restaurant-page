import reset from './reset.css'
import style from './index.css'
import home from './home.js';
import menu from './menu.js';
import about from './about.js'

let about1 = document.querySelector(".about");
let menu1 = document.querySelector(".menu");
let home1 = document.querySelector(".home");
let content = document.querySelector("#content")

home1.classList.add('selected');
home();

about1.addEventListener("click", function(){
    content.innerHTML = "";
    home1.classList.remove('selected');
    menu1.classList.remove('selected');
    about1.classList.add('selected');
    about();
})

menu1.addEventListener("click", function(){
    content.innerHTML = "";
    home1.classList.remove('selected');
    about1.classList.remove('selected');
    menu1.classList.add('selected');
    menu();
})

home1.addEventListener("click", function(){
    content.innerHTML = "";
    about1.classList.remove('selected');
    menu1.classList.remove('selected');
    home1.classList.add('selected');
    home();
})