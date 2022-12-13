const btn_left = document.querySelector(".btn-left");
const btn_rigth = document.querySelector(".btn-rigth");

const noticia = document.querySelectorAll(".noticia");

const tran0 = '0%'
const tran100= '110%'
const tran_100='-110%'

let ban0 = true
let ban100 = false
let ban_100 = false


function add_remove_class(elem,arg1,arg2){
    elem.classList.remove(arg2);
    elem.classList.add(arg1);
}

noticia[0].classList.add('trans_100')
noticia[1].classList.add('trans0')
noticia[2].classList.add('trans100')

btn_left.addEventListener('click', (e) =>{
    if(ban0){
        add_remove_class(noticia[0], 'trans100', 'trans_100');
        add_remove_class(noticia[1], 'trans_100', 'trans0');
        add_remove_class(noticia[2], 'trans0', 'trans100');
        ban0 = false
        ban100=true
        ban_100 = false
    }else
    if(ban100){
        add_remove_class(noticia[0], 'trans0', 'trans100');
        add_remove_class(noticia[1], 'trans100', 'trans_100');
        add_remove_class(noticia[2], 'trans_100', 'trans0');
        ban100 = false
        ban_100 = true
        ban0 = false
    }else
    if(ban_100){
            add_remove_class(noticia[0], 'trans_100', 'trans0');
            add_remove_class(noticia[1], 'trans0', 'trans100');
            add_remove_class(noticia[2], 'trans100', 'trans_100');
            ban_100 = false
            ban0 = true
            ban100 = false
        }
})

btn_rigth.addEventListener('click', (e) =>{
    if(ban0){
        add_remove_class(noticia[0], 'trans0', 'trans_100');
        add_remove_class(noticia[1], 'trans100', 'trans0');
        add_remove_class(noticia[2], 'trans_100', 'trans100');
        ban0 = false
        ban100=true
        ban_100 = false
    }else
    if(ban100){
        add_remove_class(noticia[0], 'trans100', 'trans0');
        add_remove_class(noticia[1], 'trans_100', 'trans100');
        add_remove_class(noticia[2], 'trans0', 'trans_100');
        ban100 = false
        ban_100 = true
        ban0 = false
    }else
    if(ban_100){
            add_remove_class(noticia[0], 'trans_100', 'trans100');
            add_remove_class(noticia[1], 'trans0', 'trans_100');
            add_remove_class(noticia[2], 'trans100', 'trans0');
            ban_100 = false
            ban0 = true
            ban100 = false
        }
})
// btn_left.addEventListener('click',()=>{
//         if(ban0){
//             noticia[0].classList.toggle('trans100')
//             noticia[0].classList.toggle('trans_100')
//             noticia[1].classList.toggle('trans_100')
//             noticia[1].classList.toggle('trans0')
//             noticia[2].classList.toggle('trans0')
//             noticia[2].classList.toggle('trans100')
//             ban0 = false
//             ban100=true
//             ban_100 = false
//         }else
//         if(ban100){
//             noticia[0].classList.toggle('trans0')
//             noticia[1].classList.toggle('trans100')
//             noticia[2].classList.toggle('trans_100')
//             noticia[0].classList.toggle('trans100')
//             noticia[1].classList.toggle('trans_100')
//             noticia[2].classList.toggle('trans0')
//             ban100 = false
//             ban_100 = true
//             ban0 = false
//         }else
//         if(ban_100){
//             noticia[0].classList.toggle('trans_100')
//             noticia[1].classList.toggle('trans0')
//             noticia[2].classList.toggle('trans100')
//             noticia[0].classList.toggle('trans0')
//             noticia[1].classList.toggle('trans100')
//             noticia[2].classList.toggle('trans_100')
//             ban_100 = false
//             ban0 = true
//             ban100 = false
//         }
        
//     })
    

















// btn_left.addEventListener('click',()=>{
//     console.log(ban0)
//     console.log(ban100)
//     console.log(ban_100)
//     if(ban0){
//         noticia[0].classList.toggle('trans100')
//         noticia[1].classList.toggle('trans100')
//         noticia[2].classList.toggle('trans100')
//         noticia[0].classList.toggle('trans0')
//         noticia[1].classList.toggle('trans0')
//         noticia[2].classList.toggle('trans0')
//         ban0 = false
//         ban100=true
//         ban_100 = false
//     }else
//     if(ban100){
//         noticia[0].classList.toggle('trans_100')
//         noticia[1].classList.toggle('trans_100')
//         noticia[2].classList.toggle('trans_100')
//         noticia[0].classList.toggle('trans100')
//         noticia[1].classList.toggle('trans100')
//         noticia[2].classList.toggle('trans100')
//         ban100 = false
//         ban_100 = true
//         ban0 = false
//     }else
//     if(ban_100){
//         noticia[0].classList.toggle('trans0')
//         noticia[1].classList.toggle('trans0')
//         noticia[2].classList.toggle('trans0')
//         noticia[0].classList.toggle('trans_100')
//         noticia[1].classList.toggle('trans_100')
//         noticia[2].classList.toggle('trans_100')
//         ban_100 = false
//         ban0 = true
//         ban100 = false
//     }
    
// })

// btn_rigth.addEventListener('click',()=>{
//     console.log(ban0)
//     console.log(ban100)
//     console.log(ban_100)
//     if(ban0){
//         noticia[0].classList.toggle('trans0')
//         noticia[1].classList.toggle('trans0')
//         noticia[2].classList.toggle('trans0')
//         noticia[0].classList.toggle('trans_100')
//         noticia[1].classList.toggle('trans_100')
//         noticia[2].classList.toggle('trans_100')
//         ban0 = false
//         ban100=false
//         ban_100 = true
//     }else
//     if(ban_100){
//         noticia[0].classList.toggle('trans_100')
//         noticia[1].classList.toggle('trans_100')
//         noticia[2].classList.toggle('trans_100')
//         noticia[0].classList.toggle('trans100')
//         noticia[1].classList.toggle('trans100')
//         noticia[2].classList.toggle('trans100')
//         ban100 = true
//         ban_100 = false
//         ban0 = false
//     }else
//     if(ban100){
//         noticia[0].classList.toggle('trans0')
//         noticia[1].classList.toggle('trans0')
//         noticia[2].classList.toggle('trans0')
//         noticia[0].classList.toggle('trans100')
//         noticia[1].classList.toggle('trans100')
//         noticia[2].classList.toggle('trans100') 
//         ban_100 = false
//         ban0 = true
//         ban100 = false
//     }
    
// })

function moverCarrusel(){
    let intervalo = setInterval(()=>{
        if(ban0){
            add_remove_class(noticia[0], 'trans100', 'trans_100');
            add_remove_class(noticia[1], 'trans_100', 'trans0');
            add_remove_class(noticia[2], 'trans0', 'trans100');
            ban0 = false
            ban100=true
            ban_100 = false
        }else
        if(ban100){
            add_remove_class(noticia[0], 'trans0', 'trans100');
            add_remove_class(noticia[1], 'trans100', 'trans_100');
            add_remove_class(noticia[2], 'trans_100', 'trans0');
            ban100 = false
            ban_100 = true
            ban0 = false
        }else
        if(ban_100){
                add_remove_class(noticia[0], 'trans_100', 'trans0');
                add_remove_class(noticia[1], 'trans0', 'trans100');
                add_remove_class(noticia[2], 'trans100', 'trans_100');
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







