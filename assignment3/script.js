const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

dropbtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});

myImg.addEventListener("mouseover", addMe);
myImg.addEventListener("mouseout", removeMe);
function addMe() {
  myImg.classList.add("round");
}
function removeMe() {
  myImg.classList.remove("round");
}
function toggleMe() {
  myImg.classList.toggle("round");
}

driverdetails.addEventListener("click", function() { 
  var hiddenText = document.getElementById("hiddenText"); 
  hiddenText.style.display = "block"; 
}); 

const charlesleclerc = document.querySelector("#charlesleclerc");
console.log(charlesleclerc);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

charlesleclerc.addEventListener("mouseover", showMoreInfo);
charlesleclerc.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
// const hoverButton = document.querySelector("#hover-button");
// console.log(hoverButton);

// const moreInfo = document.querySelector("#more-info");
// console.log(moreInfo);

// hoverButton.addEventListener("mouseover", showMoreInfo);
// hoverButton.addEventListener("mouseout", hideMoreInfo);

// function showMoreInfo() {
//   moreInfo.classList.add("show");
// }

// function hideMoreInfo() {
//   moreInfo.classList.remove("show");
// }

let draggedElement = null;

const colorBox = document.querySelector(".colorbox");
const dropBox = document.querySelector(".dropbox");

colorBox.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = colorBox;
}

dropBox.addEventListener("dragover", endDrag);

function endDrag(event) {
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);

function handleDrop() {
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    // const color = draggedElement.style.backgroundColor;
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "Dropped!";
    draggedElement = null;
  }
}