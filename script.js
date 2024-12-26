let myBtn = document.getElementById("myBtn");
let mainVideo = document.getElementById("mainVideo");
let source = document.querySelector("source");
const video = document.getElementById('myVideo');
        const msg = document.getElementById('fullscreenMsg');

        document.addEventListener('keydown', (event) => {
            if (event.key === 'f') {
                if (!document.fullscreenElement) {
                    video.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                msg.style.display = 'block';
                setTimeout(() => msg.style.display = 'none', 2000);
            }
        });
myBtn.addEventListener("click", clickIt);

function clickIt(){
  mainVideo.src = "https://cdn.glitch.global/b8c42458-d06e-4153-9a97-6f272cad9488/secondVideo.mp4?v=1735248233919";
  video.load();
}
