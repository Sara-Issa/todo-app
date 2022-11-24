// var check = document.querySelector(".check-icon");
// var checked = document.querySelector(".checked-icon");
// var todoText = document.querySelector(".todo-text");

//! the ckeck icon code     personal-note(use this when you are using icon)

// check.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector(".check-icon").style.display = "none";
//   document.querySelector(".checked-icon").style.display = "block";
//   check.parentElement.classList.add("line-through");
// });

//! the ckecked icon code     personal-note(use this when you are using icon)
// checked.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector(".check-icon").style.display = "block";
//   document.querySelector(".checked-icon").style.display = "none";
//   check.parentElement.classList.remove("line-through");
// });

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
  var json = JSON.stringify(todos);
  console.log(typeof json);
  data = JSON.parse(localStorage.getItem("todos")) || [];
  data.push(json);
  // console.log(data);
  localStorage.setItem("todos", JSON.stringify(data));
  location.reload();
}
window.addEventListener("load", function () {
  showTodoList();
});
// show todo list
function showTodoList() {
  var value = JSON.parse(localStorage.getItem("todos"));

  for (var i = 0; i < value.length; i++) {
    console.log(value[i]);

    var obj = JSON.parse(value[i]);
    console.log(obj);
    var ul = document.querySelector(".ul");
    ul.innerHTML += `
    <li class="li">
                  <input
                    type="checkbox"
                    class="check-input"
                    onclick="changeStatus(this);"
                    name="vehicle1"
                    value="Bike"
                  /><label class="todo-label" for="">${obj.todo}</label>
                  <button type="button" class="delete-btn" onclick="deleteTodos();" >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </li>
    `;
  }
}

// updating todos list
function changeStatus(check) {
  if (check.checked) {
    check.parentElement.classList.add("line-through");
  } else {
    check.parentElement.classList.remove("line-through");
  }
}

// delete todos list
function deleteTodos() {
  console.log("check");
}
