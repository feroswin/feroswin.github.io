let menuBurger = document.querySelector(".menu-burger")
let navBurger = document.querySelector(".wrapper-nav-burger")
let listMenuItems = document.querySelectorAll(".menu-burger-item")


menuBurger.addEventListener("click", (event) => {
    menuBurger.classList.toggle("active")
    document.body.classList.toggle("active")
    navBurger.classList.toggle("active")
})

listMenuItems.forEach((element) => {
    element.addEventListener("click", () => {
        menuBurger.classList.toggle("active")
        document.body.classList.toggle("active")
        navBurger.classList.toggle("active")
    })
})