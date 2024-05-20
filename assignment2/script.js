const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
const playFullscreen = document.querySelector("fullscreen-btn");
const increaseVolumeButton = document.querySelector("#increase-volume-btn");

video.removeAttribute("controls");
playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
function toggleFullscreen() {
    if (!document.playFullscreen) {
      // If no element is in fullscreen, request fullscreen on the video player
      myVideo.requestFullscreen();
      playFullscreenImg.src = "https://icons8.com/icon/69155/full-screen";
    } else {
      // Otherwise, exit fullscreen
      document.exitFullscreen();
    }
  }
playFullscreen.addEventListener("click", toggleFullscreen);
function toggleFullscreen() {
  if (video.paused || video.ended) {
    open.playFullscreen();
    playFullscreen.src = "https://icons8.com/icon/69155/full-screen";
  } else {
    video.pause();
    playPauseImg.src = "https://icons8.com/icon/69155/full-screen";
  }
}

function muteUnmuteButton() {
    if (!document.muteUnmuteButtonElement) {
      // If no element is in fullscreen, request fullscreen on the video player
      myVideo.muteUnmuteButton();
    } else {
      // Otherwise, exit fullscreen
      document.play();
    }
  }
function replay() 
    console.log("loop is", loop);
    if (loop) {
      myVideo.currentTime = 0;
      myVideo.play();
    }
function increaseVolumeButton() {
    if (!document.muteUnmuteButtonElement) {
      // If no element is in fullscreen, request fullscreen on the video player
      myVideo.increaseVolumeButton();
    } else {
      // Otherwise, exit fullscreen
      document.play();
    }
  }

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
// Event listener to mute or unmute audio on clicking the button
muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
// Event listener to increase volume on clicking the button
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
// Event listener to decrease volume on clicking the button
decreaseVolumeButton.addEventListener("click", decreaseVolume);

const loopButton = document.querySelector("#loop-btn");
// Event listener to loop or replay the video on clicking the button
loopButton.addEventListener("click", loopVideo);

const myVideo = document.querySelector("#my-video");
const videoName = document.querySelector("#video-name");
const videoTime = document.querySelector("#video-time");
const progressBar = document.querySelector("#progress-bar-fill");
// myVideo.removeAttribute("controls");

// Event listener to check time update on video to update the progress bar
myVideo.addEventListener("timeupdate", updateProgressBar);

// Event listener to check current volume
myVideo.addEventListener("volumechange", updateVolume);

// Event listener to check if the video is ended to replay it
myVideo.addEventListener("ended", replay);

const firstVideoButton = document.querySelector("#first-video-btn");

// Event listener to play the first video
firstVideoButton.addEventListener("click", function playIt() {
  myVideo.pause();
  playVideo(0);
});

function updateVolume() {
  const volume = myVideo.volume;
  console.log("Volume changed:", volume);
}

//volume values range from 0 to 1 with an increment of 0.1
function increaseVolume() {
  if (myVideo.volume < 0.9) {
    myVideo.volume += 0.1;
  }
}

//since you do not want the value to go to negative the check is not at 0 but 0.11
function decreaseVolume() {
  if (myVideo.volume > 0.11) {
    myVideo.volume -= 0.1;
  }
}


//to mute the video we check if it is already muted or not, if not
//mute it or unmute it.
function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
  } else {
    myVideo.muted = true;
    muteUnmuteButton.style.backgroundColor = "#7b775e";
  }
}

//to loop or replay the video, we set and check the value of loop
//loop is a boolean variable, originally false, but can be set to true
// by clicking the loop button

function replay() {
  console.log("loop is", loop);
  if (loop) {
    myVideo.currentTime = 0;
    myVideo.play();
  }
// }

//this function will set the value of loop to true or false
function loopVideo() {
  if (loop) {
    loop = false;
    loopButton.style.backgroundColor = "#d5cea3";
  } else {
    loop = true;
    loopButton.style.backgroundColor = "#7b775e";
  }
  console.log("loop is", loop);
}

//we increase the width of the progress bar depending on the percentage
// how much video is played in comparison to how much is left or its duration.
function updateProgressBar() {
  videoTime.textContent = myVideo.currentTime.toFixed(2);
  const value = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = value + "%";
}

// We use this function to toggle in and out of full screen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    // If no element is in fullscreen, request fullscreen on the video player
    myVideo.requestFullscreen();
  } else {
    // Otherwise, exit fullscreen
    document.exitFullscreen();
  }
}

// Event listener for double-click on the video to toggle fullscreen
myVideo.addEventListener("dblclick", toggleFullscreen);

// Event listener for fullscreen change event to update UI
document.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement === myVideo) {
    console.log("Entered fullscreen");
  } else {
    console.log("Exited fullscreen");
  } 
});
}


