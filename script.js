// this the javascript code for the system

// add todos list
var data = JSON.parse(localStorage.getItem("todos"));
localStorage.setItem("todos", JSON.stringify(data));

function addTodosList() {
  var input = document.querySelector(".todo-input");
  if (input.value == "") {
    alert("empty");
  } else {
    var todos = {
      todo: input.value,
      status: "undone",
    };
  }
  // var json = JSON.stringify(todos);
  // console.log(typeof json);
  data = JSON.parse(localStorage.getItem("todos")) || [];
  data.push(todos);
  // console.log(data);
  localStorage.setItem("todos", JSON.stringify(data));
  showTodoList();
}
window.addEventListener("load", function () {
  showTodoList();
});
// show todo list
function showTodoList() {
  var ul = document.querySelector(".ul");
  ul.innerHTML = "";
  var value = JSON.parse(localStorage.getItem("todos"));

  for (var i = 0; i < value.length; i++) {
    var obj = value[i];

    var checked = value[i].status == "undone" ? "" : "checked";
    var doneClass = value[i].status == "undone" ? "" : "line-through";
    ul.innerHTML += `
    <li class="li">
                  <input
                    type="checkbox"
                    class="check-input"
                    onclick="changeStatus(${i});"
                    name="vehicle1"
                    ${checked}
                  /><label class="${doneClass} todo-label" for="">${obj.todo}</label>
                  <button type="button" class="delete-btn" onclick="deleteTodos(${i});" >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </li>
    `;
  }
}

// updating todos list
function changeStatus(index) {
  var todosArr = JSON.parse(localStorage.getItem("todos"));
  var done = todosArr[index].status;
  if (done == "undone") {
    todosArr[index].status = "done";
    localStorage.setItem("todos", JSON.stringify(todosArr));
    showTodoList();
  } else if (done == "done") {
    todosArr[index].status = "undone";
    localStorage.setItem("todos", JSON.stringify(todosArr));
    showTodoList();
  }
}

// delete todos list
function deleteTodos(index) {
  var todosArr = JSON.parse(localStorage.getItem("todos"));
  todosArr.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosArr));
  showTodoList();
  // location.reload();
}
