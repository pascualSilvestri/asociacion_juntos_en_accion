const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");
const noticia = document.getElementsByClassName("noticia");
const articulo = document.getElementsByClassName("contenedor-ultimas_noticias");

let id;
var ban1 = true
var ban2 = false
var ban3 = false


const add_remove_class = (elem,arg1,arg2) => {
    elem.classList.add(arg1);
    elem.classList.remove(arg2);
}

// Configuraciones Iniciales de las posiciones de las noticias(Cuando ni bien arranca el programa)
noticia[0].classList.add('act')
noticia[1].classList.add('right')
noticia[2].classList.add('left')

// Cuando se presione el boton left, hacer lo siguiente:
btn_left.addEventListener('click', (e) =>{
    // Averiguar las imágenes que están en las posiciones act, right y left
    const act = document.querySelector(".act");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
    // Hallada la posicion de las imágenes reordenarlas en el sentido del botón pulsado
    add_remove_class(act, 'left', 'act');
    add_remove_class(right, 'act', 'right');
    add_remove_class(left, 'right', 'left');
})


btn_rigth.addEventListener('click', (e) =>{
    const act = document.querySelector(".act");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
    add_remove_class(act, 'right', 'act');
    add_remove_class(right, 'left', 'right');
    add_remove_class(left, 'act', 'left');
})


articulo[0].addEventListener('mouseover', (e) =>{
    clearInterval(id);
})

articulo[0].addEventListener('mouseout', (e) =>{
    moverCarrusel();
})

const moverCarrusel = () => {
    id = setInterval((e)=>{
        const act = document.querySelector(".act");
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        
        add_remove_class(act, 'left', 'act');
        add_remove_class(right, 'act', 'right');
        add_remove_class(left, 'right', 'left');
    },6000);
    
}

moverCarrusel();

// pull