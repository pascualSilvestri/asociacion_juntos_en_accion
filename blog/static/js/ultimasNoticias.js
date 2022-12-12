const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");

const noticia = document.querySelectorAll(".noticia");

const tran0 = '0%'
const tran100= '100%'
const tran_100='-100%'

let ban0 = true
let ban100 = false
let ban_100 = false

btn_left.addEventListener('click',()=>{
    console.log(ban0)
    console.log(ban100)
    console.log(ban_100)
    if(ban0){
        noticia[0].classList.toggle('trans100')
        noticia[1].classList.toggle('trans100')
        noticia[2].classList.toggle('trans100')
        noticia[0].classList.toggle('trans0')
        noticia[1].classList.toggle('trans0')
        noticia[2].classList.toggle('trans0')
        ban0 = false
        ban100=true
        ban_100 = false
    }else
    if(ban100){
        noticia[0].classList.toggle('trans_100')
        noticia[1].classList.toggle('trans_100')
        noticia[2].classList.toggle('trans_100')
        noticia[0].classList.toggle('trans100')
        noticia[1].classList.toggle('trans100')
        noticia[2].classList.toggle('trans100')
        ban100 = false
        ban_100 = true
        ban0 = false
    }else
    if(ban_100){
        noticia[0].classList.toggle('trans0')
        noticia[1].classList.toggle('trans0')
        noticia[2].classList.toggle('trans0')
        noticia[0].classList.toggle('trans_100')
        noticia[1].classList.toggle('trans_100')
        noticia[2].classList.toggle('trans_100')
        ban_100 = false
        ban0 = true
        ban100 = false
    }
    
})

btn_rigth.addEventListener('click',()=>{
    console.log(ban0)
    console.log(ban100)
    console.log(ban_100)
    if(ban0){
        noticia[0].classList.toggle('trans0')
        noticia[1].classList.toggle('trans0')
        noticia[2].classList.toggle('trans0')
        noticia[0].classList.toggle('trans_100')
        noticia[1].classList.toggle('trans_100')
        noticia[2].classList.toggle('trans_100')
        ban0 = false
        ban100=false
        ban_100 = true
    }else
    if(ban_100){
        noticia[0].classList.toggle('trans_100')
        noticia[1].classList.toggle('trans_100')
        noticia[2].classList.toggle('trans_100')
        noticia[0].classList.toggle('trans100')
        noticia[1].classList.toggle('trans100')
        noticia[2].classList.toggle('trans100')
        ban100 = true
        ban_100 = false
        ban0 = false
    }else
    if(ban100){
        noticia[0].classList.toggle('trans0')
        noticia[1].classList.toggle('trans0')
        noticia[2].classList.toggle('trans0')
        noticia[0].classList.toggle('trans100')
        noticia[1].classList.toggle('trans100')
        noticia[2].classList.toggle('trans100') 
        ban_100 = false
        ban0 = true
        ban100 = false
    }
    
})

function moverCarrusel(){
    let intervalo = setInterval(()=>{
        if(ban0){
            noticia[0].classList.toggle('trans100')
            noticia[1].classList.toggle('trans100')
            noticia[2].classList.toggle('trans100')
            noticia[0].classList.toggle('trans0')
            noticia[1].classList.toggle('trans0')
            noticia[2].classList.toggle('trans0')
            ban0 = false
            ban100=true
            ban_100 = false
        }else
        if(ban100){
            noticia[0].classList.toggle('trans_100')
            noticia[1].classList.toggle('trans_100')
            noticia[2].classList.toggle('trans_100')
            noticia[0].classList.toggle('trans100')
            noticia[1].classList.toggle('trans100')
            noticia[2].classList.toggle('trans100')
            ban100 = false
            ban_100 = true
            ban0 = false
        }else
        if(ban_100){
            noticia[0].classList.toggle('trans0')
            noticia[1].classList.toggle('trans0')
            noticia[2].classList.toggle('trans0')
            noticia[0].classList.toggle('trans_100')
            noticia[1].classList.toggle('trans_100')
            noticia[2].classList.toggle('trans_100')
            ban_100 = false
            ban0 = true
            ban100 = false
        }
    },6000)
    
}

moverCarrusel();








// function translado(transladar,arr){
//     for (let i = 0; i <= arr.length; i++){
//         arr[i].style.translate = transladar
//         console.log(arr[i].style.translate)
//     }
// }







