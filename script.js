var check = document.querySelector(".check-icon");
var checked = document.querySelector(".checked-icon");
var todoText = document.querySelector(".todo-text").innerHTML;

check.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".check-icon").style.display = "none";
  document.querySelector(".checked-icon").style.display = "block";
  document.querySelector(".todo-text").textContent = todoText;
});

checked.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".check-icon").style.display = "block";
  document.querySelector(".checked-icon").style.display = "none";
});
