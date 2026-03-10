const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("button");
function addTask() {
  if (input.value.trim() === "") {
    alert("You Must write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.id = "itsSpan";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
button.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  (eve) => {
    if (eve.target.tagName === "LI") {
      eve.target.classList.toggle("checked");
      saveData();
    }
    if (eve.target.id === "itsSpan") {
      eve.target.closest("li").remove();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
