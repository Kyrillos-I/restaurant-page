import location from './location.webp'


function home(){
    let tab = document.querySelector(".home");
    tab.classList.add('selected');
    
    let content = document.querySelector('#content');
    let locationImg = document.createElement("img");
    let description = document.createElement("home-description");
    locationImg.classList.add("physical-location");
    locationImg.src = location;
    locationImg.alt = "Photo Of The Krusty Krab Physical Restaurant"
    description.classList.add("home-description");
    description.innerText = "Welcome to the Krusty Krab!";
    content.appendChild(locationImg);
    content.appendChild(description);
} 

export default home;