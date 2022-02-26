var btnopen = document.querySelector('.contact')
var mod = document.querySelector('.mod')

function togglemod(){
    mod.classList.toggle('hide')
}

btnopen.addEventListener('click', togglemod)
mod.addEventListener('click', togglemod)
 