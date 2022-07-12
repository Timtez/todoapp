// THEME CHANGER
const themeToggle = document.querySelector(".todoHeader img").addEventListener("click", event => {
    const body = document.querySelector("body").classList.toggle("nightBody");
    const header = document.querySelector("header").classList.toggle("nightMode");
    const input = document.querySelector(".input").classList.toggle("content");
    const footer = document.querySelector(".footer").classList.toggle("content");
    const lists = document.querySelectorAll(".todo-item");
    
    if (document.body.classList.contains("nightBody")){
        const input = document.querySelector(".input");
        input.style.color = "white";
        
        lists.forEach(list => {
            list.style.backgroundColor = "hsl(240, 2%, 20%)";
            list.style.color = "white";
        })
    } else {
        lists.forEach(list => {
            list.style.backgroundColor = 'hsl(236, 33%, 92%)';
            list.style.color = "#000";
        })
    }
})