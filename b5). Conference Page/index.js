// Important Question in js

function display(pageId){
    let container = document.querySelectorAll('[id^= "section"]');
    // ^= Used to "id start with"
    // if query is true then store elemenet in container which is array
    console.log(container)

    container.forEach(element => element.classList.add("container-not-display"));
    document.getElementById(pageId).classList.remove("container-not-display");
}