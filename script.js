const modal = document.querySelector(".video-modal");
const player = document.querySelector("#youtube-player");
const closeBtn = document.querySelector(".close-video");

document.querySelectorAll(".watch-film").forEach(button => {

    button.addEventListener("click", e => {

        e.preventDefault();

        const id = button.dataset.video;

        player.src =
            `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function closeVideo(){

    modal.classList.remove("active");

    player.src = "";

    document.body.style.overflow = "";

}

closeBtn.onclick = closeVideo;

modal.onclick = e =>{

    if(e.target===modal){

        closeVideo();

    }

}

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        closeVideo();

    }

});