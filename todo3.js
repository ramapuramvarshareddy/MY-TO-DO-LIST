// Add close buttons and edit buttons to existing list items
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  addCloseButton(myNodelist[i]);
  addEditButton(myNodelist[i]);
}

// Function to add a close button to a list item
function addCloseButton(li) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // Unicode for '×'
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  // Click event to hide the list item
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Function to add an edit button to a list item
function addEditButton(li) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Edit");
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);
  
  // Click event to edit the list item
  span.onclick = function() {
    var div = this.parentElement;
    var currentText = div.firstChild.textContent; // Get current task text
    var newText = prompt("Edit your task:", currentText); // Ask user for new text
    
    if (newText && newText.trim() !== "") {
      div.firstChild.textContent = newText; // Update the task text
    } else if (newText === "") {
      alert("Task cannot be empty!");
    }
  }
}

// Add "checked" functionality on clicking list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  // Add close and edit buttons to the newly created task
  addCloseButton(li);
  addEditButton(li);
}
function clearAll() {
  var ul = document.getElementById("myUL");
  ul.innerHTML = ""; // Clears all list items
}