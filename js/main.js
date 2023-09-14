const menuOpen = document.querySelector(".ri-menu-3-fill")
const menuClose = document.querySelector(".ri-close-fill")
const menu = document.querySelector(".navlink")

menuOpen.addEventListener("click", function(){
    menu.style.top = "25%"
    menuClose.style.display = "block"
    menuOpen.style.display = "none"
})


menuClose.addEventListener("click", function(){
    menu.style.top = "-25%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
})