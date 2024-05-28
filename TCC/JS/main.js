document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".navbar img.tresbarras");
    const menuItems = document.querySelector(".navbar ul");

    menuButton.addEventListener("click", function() {
        menuItems.classList.toggle("active");
    });
});
