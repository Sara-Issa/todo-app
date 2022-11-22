var check = document.querySelector(".check-icon");
var checked = document.querySelector(".checked-icon");
var todoText = document.querySelector(".todo-text");

// the ckeck icon code
check.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".check-icon").style.display = "none";
  document.querySelector(".checked-icon").style.display = "block";
  todoText.outerHTML = "<del>" + todoText.innerHTML + "</del>";
});

// the ckecked icon code
checked.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".check-icon").style.display = "block";
  document.querySelector(".checked-icon").style.display = "none";
  todoText.outerHTML = "<p>" + todoText.innerHTML + "</p>";
});
