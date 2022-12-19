const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");
const cambio_noticias = document.getElementsByClassName("cambio-noticias");
const noticia = document.getElementsByClassName("noticia");
const articulo = document.getElementsByClassName("contenedor-ultimas_noticias")[0];
const mensaje = document.getElementsByClassName("mensaje_construccion")[0];
let id;
let carrousel = false;


//Configuraciones Iniciales de las posiciones de las noticias(Cuando ni bien arranca el programa)
if (noticia.length == 0){
    articulo.classList.add('sin_noticias');
    mensaje.style.display = 'flex';
    cambio_noticias[0].style.display = 'none';
    cambio_noticias[1].style.display = 'none';
} else if (noticia.length == 2){
    noticia[0].classList.add('noticia1_2');
    noticia[1].classList.add('noticia1_2');
    cambio_noticias[0].style.display = 'none';
    cambio_noticias[1].style.display = 'none';
} else if (noticia.length == 1){
    noticia[0].classList.add('noticia1_2');
    cambio_noticias[0].style.display = 'none';
    cambio_noticias[1].style.display = 'none';
} else {
    noticia[0].classList.add('noticia3');
    noticia[1].classList.add('noticia3');
    noticia[2].classList.add('noticia3');
    noticia[0].classList.add('act');
    noticia[1].classList.add('right');
    noticia[2].classList.add('left');
    carrousel = true;
}


// if (noticia[0]!=null){
//     noticia[0].classList.add('act')
// }
// if (noticia[1]!=null){
//     noticia[1].classList.add('right')
// }
// if (noticia[2]!=null){
//     noticia[2].classList.add('left')
// }


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
        
        if(act != null){
            add_remove_class(act, 'left', 'act');
        }
        if(right != null){
            add_remove_class(right, 'act', 'right');
        }
        if(left != null){
            add_remove_class(left, 'right', 'left');
        }
        
        
        
    },6000);
    
}

if (carrousel){
    moverCarrusel();
}


// Cuando se presione el boton left, hacer lo siguiente:
if(btn_left != null){
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
    
}


// Cuando se presione el botón right, hacer lo siguiente:
if (btn_rigth != null){
    btn_rigth.addEventListener('click', () =>{
        const act = document.querySelector(".act");
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        
        add_remove_class(act, 'right', 'act');
        add_remove_class(right, 'left', 'right');
        add_remove_class(left, 'act', 'left');
    })
}



//Cuando el cursor esté por encima del div papá, hacer lo siguiente:
if(articulo != null){
    articulo.addEventListener('mouseover', () =>{
        clearInterval(id);
    })

    articulo.addEventListener('mouseout', () =>{
        moverCarrusel();
    })
}



//Cuando el sursor salga del padre hacer lo siguiente:

