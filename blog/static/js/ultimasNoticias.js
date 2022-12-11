const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");

const noticia = document.querySelectorAll(".noticia");

const tran0 = '0%'
const tran100= '100%'
const tran_100='-100%'

let ban0 = true
let ban100 = false
let ban_100 = false

function translado(transladar,arr){
    for (let i = 0; i <= arr.length; i++){
        arr[i].style.translate = transladar
        console.log(arr[i].style.translate)
    }
}









