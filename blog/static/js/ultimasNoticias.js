const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");
const noticia = document.getElementsByClassName("noticia");


var ban1 = true
var ban2 = false
var ban3 = false


function add_remove_class(elem,arg1,arg2){
    elem.classList.add(arg1);
    elem.classList.remove(arg2);
}

noticia[0].classList.add('act')
noticia[1].classList.add('right')
noticia[2].classList.add('left')

btn_left.addEventListener('click', (e) =>{
    const act = document.querySelector(".act");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
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


function moverCarrusel(){
    let intervalo = setInterval((e)=>{
        const act = document.querySelector(".act");
        const right = document.querySelector(".right");
        const left = document.querySelector(".left");
        
        add_remove_class(act, 'left', 'act');
        add_remove_class(right, 'act', 'right');
        add_remove_class(left, 'right', 'left');
    },6000);
    
}

moverCarrusel();







