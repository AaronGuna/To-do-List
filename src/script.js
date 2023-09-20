function addTask() {
    var taskText = document.getElementById("newTask").value;
    var taskTime = document.getElementById("taskTime").value;

    if (taskText.trim() !== "") {
        var taskList = document.getElementById("taskList");

        var taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        var taskTextDiv = document.createElement("div");
        taskTextDiv.innerText = taskText;

        var taskTimeDiv = document.createElement("div");
        taskTimeDiv.innerText = "Due: " + formatTime(taskTime);

        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("taskCheckbox");
        checkBox.addEventListener("change", function() {
            taskDiv.classList.toggle("completed");
        });

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function() {
            taskDiv.remove();
        };

        taskDiv.appendChild(checkBox);
        taskDiv.appendChild(taskTextDiv);
        taskDiv.appendChild(taskTimeDiv);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
        document.getElementById("newTask").value = "";
        document.getElementById("taskTime").value = "";
    }
}

function formatTime(datetime) {
    var date = new Date(datetime);
    return date.toLocaleString();
}
