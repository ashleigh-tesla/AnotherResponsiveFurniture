// Menu Toggle
const menu = document.querySelector('.menu-icon')
const navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('active')
    cart.classList.remove('open')
    menu.classList.toggle("move")
    login.classList.remove('vula')
}

//Cart Toggle
let cart = document.querySelector('.cart')

document.querySelector('#cart-icon').onclick = () => {
    navbar.classList.remove('active')
    cart.classList.toggle('open')
    menu.classList.remove("move")
    login.classList.remove('vula')

}

// Login Form Toggle
const login = document.querySelector('.login-form')
const userIcon = document.querySelector('#user-icon')

userIcon.onclick = () => {
    login.classList.toggle('vula')
    navbar.classList.remove('active')
    cart.classList.remove('open')
    menu.classList.remove("move")
}