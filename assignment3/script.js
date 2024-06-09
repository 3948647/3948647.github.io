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

// scroll 
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}