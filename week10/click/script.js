const catbutton = document.querySelector("cat-button");
console.log(catButton);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount =0; 

catButton.addEventListener("click", increaseLikes);

function increaseLikes()

    likeCount++;
    console.log("I am clicked");
    // likeCount.textContent = likeCount;
    likes.innerHTML =`<h3>${likeCount} </h3>`;
