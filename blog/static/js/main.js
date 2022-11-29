// Hacer desaparecer el home 
const titulo = document.title;
const home = document.querySelector('.nav_home');
const title = 'Asociacion Juntos en accion'

if (title != titulo){
    home.style.display = 'flex'
}else{
    home.style.display = 'none'
}
// fin del bloque 


const body = document.querySelector('body');
