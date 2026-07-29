const modal = document.querySelector(".video-modal");
const player = document.querySelector("#youtube-player");
const closeBtn = document.querySelector(".close-video");

document.querySelectorAll(".watch-film").forEach(item => {

    item.addEventListener("click", (e) => {

        e.preventDefault();

        let video = item.dataset.video.trim();

        // If only a video ID is supplied, convert it to an embed URL
        if (!video.includes("youtube.com/embed")) {
            video = `https://www.youtube.com/embed/${video}`;
        }

        // Start the video automatically
        player.src = `${video}?autoplay=1&rel=0&modestbranding=1`;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});

function closeVideo() {

    modal.classList.remove("active");

    // Remove the src so the video stops playing
    player.src = "";

    document.body.style.overflow = "";

}

closeBtn.addEventListener("click", closeVideo);

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeVideo();
    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeVideo();
    }

});