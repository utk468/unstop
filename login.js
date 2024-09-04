const signup = document.querySelector(".signd");
const login = document.querySelector(".logd");
const sign = document.querySelector(".login")
const cross1 = sign.querySelector(".cross")
const logi = document.getElementById("login")
const loginform=document.querySelector(".loginfo input")
const signinform=document.querySelector(".signin ")
const loginbutton=document.querySelector(".loginbutton")
function qs(classmain){
    return document.querySelector(classmain)
}
signup.addEventListener("click", () => {
    login.classList.toggle("bg");
    signup.classList.toggle("bgadd");
    loginform.classList.toggle("disp")
    signinform.classList.toggle("disp")
    loginbutton.style.display="block"
});
login.addEventListener("click", () => {
    login.classList.toggle("bg");
    signup.classList.toggle("bgadd");
    loginform.classList.toggle("disp")
    signinform.classList.toggle("disp")
    loginbutton.style.display="none"
})
logi.addEventListener("click", (event) => {
    event.preventDefault

    sign.classList.toggle("disp")
})
cross1.addEventListener("click", () => {
    sign.classList.toggle("disp")
})
