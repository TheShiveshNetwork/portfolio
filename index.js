var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const modal = document.querySelector(".modal")
const contactmodal = document.querySelector(".contact-modal")
const exploremodal = document.querySelector(".explore-modal")

contactmodal.style.display = "none";
exploremodal.style.display = "none";

document.getElementById("contact1").addEventListener("click", () => {
    contactmodal.style.display = "block";
})

document.getElementById("contact2").addEventListener("click", () => {
    contactmodal.style.display = "block";
})

document.querySelector(".explore-btn").addEventListener("click", () => {
    exploremodal.style.display = "block";
})

document.querySelector(".cancel").addEventListener("click", () => {
    contactmodal.style.display = "none";
})

document.querySelector(".close_modal").addEventListener("click", () => {
    exploremodal.style.display = "none";
})