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
