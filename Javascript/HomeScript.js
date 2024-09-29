const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const NavbarLinks = document.getElementsByClassName('NavbarLinks')[0]

ToggleButton.addEventListener('click', () => {
    NavbarLinks.classList.toggle('active')
})

document.querySelector("#Close").addEventListener('click', () => {
    document.querySelector(".PopUpBanner").style.display = "none"
    document.querySelector("#BlurEffect").style.filter = 'none'
})

document.addEventListener("DOMContentLoaded", () => {
    var MuteButton = document.getElementById("MuteButton");
    var Video = document.getElementById("MainVideo");

    MuteButton.addEventListener("click", () => {
        if(Video.muted) {
            Video.muted = !Video.muted;
        }
        else {
            Video.muted = !Video.muted;
        }
    })
})