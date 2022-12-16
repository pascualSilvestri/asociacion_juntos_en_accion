// Hacer desaparecer el home 
const titulo = document.title;
const home = document.querySelector('.home');
const mision = document.querySelector('.mision');
const recursos = document.querySelector('.recursos');
const noticias = document.querySelector('.noticias');
const contacto = document.querySelector('.contacto');
const btnArriva = document.querySelector(".up")
const menu = document.querySelector('.contenedor_nav');
const btnMenu = document.querySelector('.menu')
const bienvenido = document.querySelector('.bienvenido')
const dropdown_content = document.querySelector('.dropdown-content')
const dropdown = document.querySelector('.dropdown')


const title = 'Asociacion Juntos en accion |'
const tituloNoticia = 'Asociacion Juntos en accion | Noticias'
const tituloRecursos = 'Asociacion Juntos en accion | Recursos'
const tituloRegistrar = 'Asociacion Juntos en accion | Registrar'
const tituloLogin = 'Asociacion Juntos en accion | Login'

btnArriva.style.display = "none"
console.log(titulo)
console.log(tituloNoticia)

if (title != titulo){
    home.style.display = 'flex'
    mision.style.display = 'none'
    bienvenido.style.display = 'none'
}else{
    home.style.display = 'none'
    mision.style.display = 'flex'
}

if(tituloNoticia == titulo){
    noticias.style.display = 'none'
    
}else{
    noticias.style.display = 'flex'
}


// fin del bloque 
dropdown.addEventListener('click',()=>{
    const img = document.querySelector('.img-drop');
    dropdown.classList.toggle("dropdown-active")
    dropdown_content.classList.toggle('activar_select')
    img.classList.toggle('img-none')
});



document.addEventListener("scroll", e => {
    let scrolly = e.path[1].window.scrollY
    if (scrolly >= 600) {
        btnArriva.style.display = "flex"
    }
    if (scrolly < 600) {
        btnArriva.style.display = "none"
    }

});


btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle("mostrar")
});

contacto.addEventListener('click', ()=>{
    menu.classList.toggle("mostrar")
});


mision.addEventListener('click', ()=>{
    menu.classList.toggle("mostrar")
});


// Pruebas

// const noticia = document.querySelector('.noticia');

// noticia.style.backgroundImage = "url('/media/noticias/messiPaises.jpeg')";
