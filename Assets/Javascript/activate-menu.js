const menuButton = document.getElementById("mobile-menu-button")
const menu = document.getElementById("navigation")

menuButton.addEventListener('click', () => {
    menu.classList.toggle("active")
});

console.log(menuButton)
console.log(menu)