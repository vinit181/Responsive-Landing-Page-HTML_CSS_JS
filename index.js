var toggleBtn 
var bigWrapper
var hamburgerMenu

function declare(){
    bigWrapper = document.querySelector(".big-wrapper")
    toggleBtn = document.querySelector(".toggle-btn")
    hamburgerMenu = document.querySelector(".hamburger-menu")
}
const main = document.querySelector("main") 


declare()


let dark = false

function toggleAnimation(){
    //clone the wrapper

    dark = !dark;

    let clone = bigWrapper.cloneNode(true)

    if(dark){
        clone.classList.remove("light")
        clone.classList.add("dark")
    }
    else{
        clone.classList.remove("dark")
        clone.classList.add("light")

    }
    clone.classList.add("copy")

    main.appendChild(clone)

    clone.addEventListener("animationend",()=>{
        bigWrapper.remove()
        clone.classList.remove("copy")
        //reset
        declare()
        events()
    })
}

function events(){
    toggleBtn.addEventListener('click', toggleAnimation)
    hamburgerMenu.addEventListener("click", ()=>{
        bigWrapper.classList.toggle("active")
    })

}

events()