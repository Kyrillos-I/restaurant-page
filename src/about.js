function about(){
    let content = document.querySelector("#content");
    let abt = document.createElement("div");
    abt.classList.add("abt-description");
    abt.innerText = "[Insert something Krusty Krab themed]";
    content.appendChild(abt)
}

export default about;