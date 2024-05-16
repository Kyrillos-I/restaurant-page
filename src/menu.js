import patty from "./krabbyPaty.jpeg";
import pizza from "./pizza.webp";

function menu(){
    let container = document.querySelector("#content");
    let item1 = document.createElement("div");
    let item2 = document.createElement("div");
    let pattyDescript = document.createElement("div");
    let pattyImg = document.createElement("img");
    let pizzaDescript = document.createElement("div");
    let pizzaImg = document.createElement("img");

    item1.classList.add("item1");
    item2.classList.add("item2");
    container.appendChild(item1);
    container.appendChild(item2);

    pattyDescript.classList.add("foodDescription");
    pattyDescript.innerText = "The Legendary Kraby Patty!";
    pattyImg.classList.add("food");
    pattyImg.src = patty;
    pattyImg.alt = "An image of a Krabby Patty, pretty much just a regular hamburger.";
    item1.appendChild(pattyDescript);
    item1.appendChild(pattyImg)

    pizzaDescript.classList.add("foodDescription");
    pizzaDescript.innerText = "Krusty Krab Pizza, is the pizza, for you and me!";
    pizzaImg.classList.add("food");
    pizzaImg.src = pizza;
    pizzaImg.alt = "An image of a Krabby Patty, pretty much just a regular hamburger.";
    item2.appendChild(pizzaDescript);
    item2.appendChild(pizzaImg);
}

export default menu;