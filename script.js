function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = taskText;

  let del = document.createElement("span");
  del.textContent = "Delete";
  del.className = "delete";
  del.onclick = function() {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(del);
  document.getElementById("taskList").appendChild(li);
  input.value = ""; 
}
