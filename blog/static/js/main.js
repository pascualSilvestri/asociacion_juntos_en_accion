// Hacer desaparecer el home 
const titulo = document.title;
const home = document.querySelector('.home');
const mision = document.querySelector('.mision');
const recursos = document.querySelector('.recursos');
const noticias = document.querySelector('.noticias')
const btnArriva = document.querySelector(".up")
const menu = document.querySelector('.contenedor_nav');
const btnMenu = document.querySelector('.menu')

const title = 'Asociacion Juntos en accion |'
const tituloNoticia = 'Asociacion Juntos en accion | noticias'
const tituloRecursos = 'Asociacion Juntos en accion | recursos'

btnArriva.style.display = "none"
console.log(titulo)
console.log(tituloNoticia)

if (title != titulo){
    home.style.display = 'flex'
    mision.style.display = 'none'
}else{
    home.style.display = 'none'
    mision.style.display = 'flex'
}

if(tituloNoticia == titulo){
    noticias.style.display = 'none'
}else{
    noticias.style.display = 'flex'
}

if(tituloRecursos == titulo){
    recursos.style.display = 'none'
}else{
    recursos.style.display = 'flex'
}
// fin del bloque 


document.addEventListener("scroll", e => {
    let scrolly = e.path[1].window.scrollY
    if (scrolly >= 200) {
        btnArriva.style.display = "flex"
    }
    if (scrolly < 200) {
        btnArriva.style.display = "none"
    }

});


btnMenu.addEventListener('click', (e)=>{
    menu.classList.toggle("mostrar")
});