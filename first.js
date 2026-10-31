let taskinput = document.getElementById("taskinput");
let tasklist = document.getElementById("tasklist");

function addtask() {
    let task = taskinput.value; // Sahi variable reference
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li"); // '1l' ki jagah 'li'
    li.innerHTML = `<span>${task}</span> <button onclick="deletetask(event)">delete</button>`;

    // Click task to mark completed
    li.querySelector("span").onclick = function() {
        this.classList.toggle("completed");
    };

    tasklist.appendChild(li);
    taskinput.value = "";
}

function deletetask(event) {
    event.target.parentElement.remove();
}