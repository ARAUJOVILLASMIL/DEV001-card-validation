import validator from './validator.js';

const validar = document.getElementById("validar")
 validar.addEventListener("click",capturarnumero)
 validar.addEventListener("click",mascara)

// funcion que captura el numero que ingresa el usuario
// vlue, es el valor que ingresa o numero de tarjeta
function capturarnumero(){
 const numero = document.getElementById("numero").value

// esta funcion valida el numero que el usuario ingresa.
 let valido=validator.isValid(numero)
if (valido){
    alert ("es valido")    
}
else {
    alert("no es valido")
}

}
//esta funcion es la que va tapar los numeros enmascarar
 function mascara(){
   const inputtarjeta = document.getElementById("numero").value
   let mascarilla = validator.maskify(inputtarjeta) 
   document.getElementById("numero").value =mascarilla
 }


