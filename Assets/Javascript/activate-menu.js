const menuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("navigation");
const socialHorizontal = document.querySelectorAll(".social-icons.horizontal .icon")
const socialVertical = document.querySelectorAll(".social-icons.vertical .icon")




menuButton.addEventListener('click', () => {
    menu.classList.toggle("active")
});


if(menu.contains("active")){

    socialHorizontal.forEach(element => {
        
        element.classList.add("nonactive")
    });
}

/*
for (let i = 0; i < socialHorizontal.length; i++) {
    
    socialHorizontal[i].classList.toggle("nonactive")

    socialHorizontal[i].style.color = "red"
    
    
}
for (let i = 0; i < socialVertical.length; i++) {
    
   number = socialVertical[i].classList.toggle("nonactive")

    socialVertical[i].style.color = "red";

}
*/


