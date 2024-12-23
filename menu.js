let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let elements = document.querySelectorAll('.hidden')

let myObserver = new IntersectionObserver( (entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting) {
        entry.target.classList.add('show')
       
    }
    else {
           entry.target.classList.remove('show') 
    }
   })
})

elements.forEach((element) => myObserver.observe(element))

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})