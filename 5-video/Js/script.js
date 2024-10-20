const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");


switchBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        span1.style.display = "none";
        span2.style.display = "inline";
    } else {
        video.pause();

        span1.style.display = "inline";
        span2.style.display = "none";
    }
});
