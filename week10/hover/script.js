const catImg = document.querySelector("cat-img");
console.log(catImg);

cosnt more-Info = document.querySelector("more-info");
console.log(moreInfo);

catImg.addEventListener("mouseover", showInfo);
catImg.addEventListener("mouseout", hideInfo);

moreInfo.innerHTML ="<p>Add to cart </p>";

function showInfo()
{ 
    moreInfo.classList.add("show");
    moreInfo.style.backgroundColor = "red";

}

function hideInfo()
{ 
    moreInfo.classList.remove("show");
    
}