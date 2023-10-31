let listContainer = document.getElementById("myUL");

showTask();

listContainer.addEventListener('click', function(ev) {
  if (ev.target.classList.contains('remove-btn')) {
    let li = ev.target.parentElement;
    listContainer.removeChild(li);
    saveData();
  } else if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveData();
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  let errorMessage = document.getElementById("error-message"); // Get the error message element

  if (inputValue === '') {
    errorMessage.style.display = "block"; // Display the error message
  } else {
    errorMessage.style.display = "none"; // Hide the error message
    let removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";
    li.appendChild(removeButton);

    listContainer.appendChild(li);
  }
  document.getElementById("myInput").value = "";

  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  let savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}