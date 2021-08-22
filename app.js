const navToggle = document.querySelector(".burger-icon");
const itemToggle = document.querySelectorAll(".navlist-item");
const links = document.querySelector(".navlist");

navToggle.addEventListener("click", function() {
    links.classList.toggle("navlist-expanded");
    //burger.classList.toggle("is-active");
});

links.addEventListener("click", function() {
    links.classList.toggle("navlist-expanded");
    //burger.classList.toggle("is-active");
});