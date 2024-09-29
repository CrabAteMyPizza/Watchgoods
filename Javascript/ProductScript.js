const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const NavbarLinks = document.getElementsByClassName('NavbarLinks')[0]
const OmegaButton = document.getElementById("OmegaButton")
const RolexButton = document.getElementById("RolexButton")
const MontBlancButton = document.getElementById("MontBlancButton")
const TagButton = document.getElementById("TagHeuerButton")
var OmegaGallery = document.getElementById("OmegaGallery")
var RolexGallery = document.getElementById("RolexGallery")
var MontGallery = document.getElementById("MontGallery")
var TagGallery = document.getElementById("TagGallery")

OmegaButton.addEventListener('click', () => {
    RolexGallery.style.display = "none"
    MontGallery.style.display = "none"
    TagGallery.style.display = "none"
    OmegaGallery.style.display = "block"
})

TagButton.addEventListener('click', () => {
    RolexGallery.style.display = "none"
    MontGallery.style.display = "none"
    OmegaGallery.style.display = "none"
    TagGallery.style.display = "block"
})

RolexButton.addEventListener('click', () => {
    TagGallery.style.display = "none"
    MontGallery.style.display = "none"
    OmegaGallery.style.display = "none"
    RolexGallery.style.display = "block"
})

MontBlancButton.addEventListener('click', () => {
    TagGallery.style.display = "none"
    OmegaGallery.style.display = "none"
    RolexGallery.style.display = "none"
    MontGallery.style.display = "block"
})

ToggleButton.addEventListener('click', () => {
    NavbarLinks.classList.toggle('active')
})