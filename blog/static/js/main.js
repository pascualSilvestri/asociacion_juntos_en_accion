// Hacer desaparecer el home 
const titulo = document.title;
const home = document.querySelector('.nav_home');
const quienesSomos = document.querySelector('.nav_quienes-somos');
const mision = document.querySelector('.nav_mision');
const contacto = document.querySelector('.nav_contacto');
const title = 'Asociacion Juntos en accion'

console.log(titulo)

if (title != titulo){
    home.style.display = 'flex'
    quienesSomos.style.display = 'none'
    mision.style.display = 'none'
    contacto.style.display = 'none'
}else{
    home.style.display = 'none'
    quienesSomos.style.display = 'flex'
    mision.style.display = 'flex'
    contacto.style.display = 'flex'
}
// fin del bloque 

