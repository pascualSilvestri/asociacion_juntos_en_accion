const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const usuario = document.querySelector("#usuario");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

const cont_nombre = document.querySelector(".cont_nombre");
const cont_apellido = document.querySelector(".cont_apellido");
const cont_email = document.querySelector(".cont_email");
const cont_usuario = document.querySelector(".cont_usuario");
const cont_password1 = document.querySelector(".cont_password1");
const cont_password2 = document.querySelector(".cont_password2");

const btn = document.querySelector(".btn-registrar");

let errorN = false
let errorA = false
let errorE = false
let errorU = false
let errorP = false
let errorPP = false
let errorB = false

const redex = {
    'nombre': /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    'apellido': /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'usuario': /[a-zA-Z0-9][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
};

const errorMensaje = {
    'nombre': `No puede estar vacio ni contener numeros, min-3 letras.`,
    'apellido': `No puede estar vacio ni contener numeros, min-3 letras.`,
    'email': `El formato correcto es ejemplo@correo.com`,
    'usuario': `No puede estar vacio debe contener min 2 letra`,
    'btnError': "Por favor complete los campo correctamente."
}

function error(cont) {
    cont.classList.add("sin-validar");
    cont.classList.remove("valida");
}

function valido(cont) {
    cont.classList.remove("sin-validar")
    cont.classList.add("valida");
}




function validar(input, cont) {
    if (input != null){
        input.addEventListener("blur", e => {
            if (e.target.id == "nombre") {
    
                if (input.value != "" && redex["nombre"].test(input.value)) {
                    valido(cont)
                    eliminarError(".nombre")
                    errorN = false
                } else
                    if (!errorN) {
                        error(cont)
                        divError(errorMensaje['nombre'], cont_nombre, "nombre");
                        errorN = true
                    }
            }
    
            if (e.target.id == "apellido") {
    
                if (input.value != "" && redex["apellido"].test(input.value)) {
                    valido(cont)
                    eliminarError(".apellido")
                    errorA = false
                } else
                    if (!errorA) {
                        error(cont)
                        divError(errorMensaje['apellido'], cont_apellido, "apellido");
                        errorA = true
                    }
            }
    
            if (e.target.id == "usuario") {
    
                if (input.value != "" && redex["usuario"].test(input.value)) {
                    valido(cont)
                    eliminarError(".usuario")
                    errorU = false
                } else
                    if (!errorU) {
                        error(cont)
                        divError(errorMensaje['usuario'], cont_usuario, "usuario");
                        errorU = true
                    }
            }
    
            if (e.target.id == "email") {
    
                if (input.value != "" && redex["email"].test(input.value)) {
                    console.log(cont)
                    valido(cont)
                    eliminarError(".email")
                    errorE = false
                } else
                    if (!errorE) {
                        error(cont)
                        divError(errorMensaje['email'], cont_email, "email");
                        errorE = true
                    }
            }
    
            if (e.target.id == "password1") {
    
                if (input.value != "" && redex["usuario"].test(input.value)) {
                    valido(cont)
                    eliminarError(".password1")
                    errorP = false
                } else
                    if (!errorP) {
                        error(cont)
                        divError(errorMensaje['usuario'], cont_password1, "password1");
                        errorP = true
                    }
            }
            if (e.target.id == "password2") {
    
                if (input.value != "" && redex["usuario"].test(input.value)) {
                    valido(cont)
                    eliminarError(".password2")
                    errorPP = false
                } else
                    if (!errorPP) {
                        error(cont)
                        divError(errorMensaje['usuario'], cont_password2, "password2");
                        errorPP = true
                    }
            }
        });
    }
    

}

function sinEstado(cont) {
    cont.classList.remove("sin-validar")
    cont.classList.remove("valida");
}

function eliminarError(clase) {
    let div = document.querySelector(clase);
    div.remove()
}

function divError(error, cont, clase) {
    let div = document.createElement("div");
    let cont_div = document.createTextNode(error)
    div.appendChild(cont_div);
    div.classList.add("mensaje-error", clase)
    cont.append(div);
}

// btn.addEventListener("click", e => {    
//     if (!errorA && !errorE && !errorP && !errorN && !errorPP && !errorU && nombre.value != "" && email.value != "" && usuario.value != "") {
//         alert("Envio con exito");
//         nombre.value = "";
//         apellido.value = "";
//         email.value = "";
//         usuario.value = "";
//         password1.value = "";
//         password2.value = "";
//         sinEstado(cont_nombre);
//         sinEstado(cont_email);
//         sinEstado(cont_usuario);
//         sinEstado(cont_mensaje);
//         sinEstado(cont_password1);
//         sinEstado(cont_password2);
//         eliminarError(".error-btn");
//         errorB = false
//     } else
//         if (!errorB) {
//             divError(errorMensaje['btnError'], cont_form, "error-btn");
//             errorB = true
//         }
// });

validar(nombre, cont_nombre);
validar(apellido, cont_apellido);
validar(email, cont_email);
validar(usuario, cont_usuario);
validar(password1, cont_password1)
validar(password2, cont_password2)


