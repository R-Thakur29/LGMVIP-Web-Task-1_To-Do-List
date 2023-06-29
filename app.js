const inputbox = document.getElementById("text-area");
const container = document.getElementById("list-container");

function add() {
    if(inputbox.value === '')
        alert("You must write something!");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    save_data();
}

container.addEventListener("click", function(a) {
    if(a.target.tagName == "LI") {
        a.target.classList.toggle("checked");
        save_data();
    }
    else if(a.target.tagName == "SPAN") {
        a.target.parentElement.remove();
        save_data();
    }
},false );

function save_data() {
    localStorage.setItem("list", container.innerHTML);
}

function show_list() {
    container.innerHTML = localStorage.getItem("list");
}

show_list();
