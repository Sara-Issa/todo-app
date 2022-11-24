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
var data = [];
  data.push(JSON.parse(localStorage.getItem("todos")));
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
  //   var prev = JSON.parse(localStorage.getItem("todo"));
  //   console.log(prev);
    
  //   var data = [];
  //   data.push(prev);
  //   console.log(data);

  //   data.push(json);
  //   localStorage.setItem("key", JSON.stringify(data));
  // }

  var data = [];
  data = JSON.parse(localStorage.getItem("todos")) || [];
  data.push(json);
  console.log(data);
  localStorage.setItem("todos", JSON.stringify(data));



}

// show todos list
var show = JSON.parse(localStorage.getItem("todos"))
console.log(show);
for (let i = 0; i < show.length; i++) {
  console.log(show[i].todo);
  document.querySelector("label").innerHTML = show[i].todo
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
var del = JSON.parse(localStorage.getItem("todos"))
var delBtn = document.querySelectorAll('delete-btn')

function delFunction() {
  
}

for (let i=0; i<todos.length; i++){
  
  if(del[i].todo == "Hi"){   
    greetings.splice(i,1);
    i--;
  }
}
document.write(greetings);