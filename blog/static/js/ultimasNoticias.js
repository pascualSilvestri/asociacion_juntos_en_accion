const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");
const noticia = document.getElementsByClassName("noticia");
const articulo = document.getElementsByClassName("contenedor-ultimas_noticias")[0];
let id;

// Configuraciones Iniciales de las posiciones de las noticias(Cuando ni bien arranca el programa)
noticia[0].classList.add('act')
noticia[1].classList.add('right')
noticia[2].classList.add('left')


// Función que añade y remueve las clases
const add_remove_class = (elem,arg1,arg2) => {
    elem.classList.add(arg1);
    elem.classList.remove(arg2);
}


// Función para el movimiento automático del carrousel
const moverCarrusel = () => {
    id = setInterval(()=>{
        const act = document.querySelector(".act");
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        
        add_remove_class(act, 'left', 'act');
        add_remove_class(right, 'act', 'right');
        add_remove_class(left, 'right', 'left');
    },6000);
    
}

moverCarrusel();


// Cuando se presione el boton left, hacer lo siguiente:
btn_left.addEventListener('click', () =>{
    // Averiguar las imágenes que están en las posiciones act, right y left
    const act = document.querySelector(".act");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
    // Hallada la posicion de las imágenes reordenarlas en el sentido del botón pulsado
    add_remove_class(act, 'left', 'act');
    add_remove_class(right, 'act', 'right');
    add_remove_class(left, 'right', 'left');
})


// Cuando se presione el botón right, hacer lo siguiente:
btn_rigth.addEventListener('click', () =>{
    const act = document.querySelector(".act");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
    add_remove_class(act, 'right', 'act');
    add_remove_class(right, 'left', 'right');
    add_remove_class(left, 'act', 'left');
})


//Cuando el cursor esté por encima del div papá, hacer lo siguiente:
articulo.addEventListener('mouseover', () =>{
    clearInterval(id);
})


//Cuando el sursor salga del padre hacer lo siguiente:
articulo.addEventListener('mouseout', () =>{
    moverCarrusel();
})
