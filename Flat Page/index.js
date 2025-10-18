function display(activeId){
    let container = document.querySelectorAll('[id^= "section"]')
    // ^= Used to "id start with"
    // if query is true then store elemenet in container which is array

    container.forEach(element => element.classList.add("container-not-display"));
    document.getElementById(activeId).classList.remove("container-not-display");
}