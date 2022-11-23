var check = document.querySelector(".check-icon");
var checked = document.querySelector(".checked-icon");
var todoText = document.querySelector(".todo-text");

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
function addTodosList() {
  var input = document.querySelector(".todo-input");
  if (input.value == "") {
    alert("empty");
  } else {
    var todos = {
      todo: input.value,
      status: "undone",
    };

    var json = JSON.stringify(todos);
    console.log(typeof json);
    var prev = JSON.parse(localStorage.getItem("todo"));
    var data = [];
    data.push(prev);
    console.log(data);

    data.push(json);
    localStorage.setItem("key", JSON.stringify(data));
  }
}

// show todos list

// updating todos list
function changeStatus(check) {
  if (check.checked) {
    check.parentElement.classList.add("line-through");
  } else {
    check.parentElement.classList.remove("line-through");
  }
}

// delete todos list
