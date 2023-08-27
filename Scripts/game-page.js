const fullscreenVideo = document.getElementById("fullscreenVideo");

document.addEventListener("fullscreenchange", handleFullscreenChange);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // If no element is in full-screen
        if (fullscreenVideo.requestFullscreen) {
            fullscreenVideo.requestFullscreen();
        } else if (fullscreenVideo.mozRequestFullScreen) {
            fullscreenVideo.mozRequestFullScreen();
        } else if (fullscreenVideo.webkitRequestFullscreen) {
            fullscreenVideo.webkitRequestFullscreen();
        } else if (fullscreenVideo.msRequestFullscreen) {
            fullscreenVideo.msRequestFullscreen();
        }
        fullscreenVideo.muted = false;
    } else {
        // If an element is in full-screen, exit full-screen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenVideo.muted = true;
    }
}

function handleFullscreenChange() {
    if (!document.fullscreenElement) {
        fullscreenVideo.muted = true; // Mute video when exiting fullscreen
    } else {
        fullscreenVideo.muted = false; // Unmute video when entering fullscreen
    }
}
