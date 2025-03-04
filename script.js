document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});




// Get the hamburger button and the navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Add a click event listener to the hamburger button
hamburger.addEventListener("click", function() {
    // Toggle the "active" class on the nav menu
    navMenu.classList.toggle("active");
});