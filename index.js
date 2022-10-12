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
    alert ("Compra Exitosa")    
}
else {
    alert("Compra fallida")
}15245215222

}
//esta funcion es la que va tapar los numeros enmascarar
 function mascara(){
   const inputtarjeta = document.getElementById("numero").value
   let mascarilla = validator.maskify(inputtarjeta) 
   document.getElementById("numero").value =mascarilla
 }

// estalet no trae del html el Id numero//
let numero= document.getElementById("numero")
//keyuo lo usamos para saber cuando el usuario toque una tecla y la suelte//
numero.addEventListener("keyup",() => { 
  //con este evento llamamos el valor del imput desde html//
  let numeroimput= document.getElementById("numero").value
  //con esta expresion capturamos lo que el usuario ingresa dentro del imput
  numero.value = numeroimput

  //con esta expresion eliminamos espacios, letras y agrupamosde de 4 en 4
  .replace(/\s/g,'')
  .replace(/\D/g,'')
  //.replace(/([0-9]{4})/g,'$1 ') esta se supone que da espacios pero no funciona
  .trim();
  let ultimosnumero= document.getElementById ("ultimoscuatro")
  ultimosnumero.textContent= numeroimput.slice(-4)

 })
 // con esta variable capturamos nombre de usuario
 let imputusuario= document.getElementById("imputusuario")
 imputusuario.addEventListener("keyup",() => {
 let nombreusuario= document.getElementById("nombreusuario")
 nombreusuario.textContent=imputusuario.value
 })
 //para capturar el imput de mes
 let imputmes= document.getElementById("imputmes")
 imputmes.addEventListener("keyup",() => {
  //con este let capturamos el spam donde se coloca la fecha en html
 let mes= document.getElementById("mes")
 mes.textContent=imputmes.value

})

//con este let capturamos el año
let imputyear= document.getElementById("imputyear")
 imputyear.addEventListener("keyup",()=>{
// con este let capturamos el spam de year
let year= document.getElementById("year")
year.textContent=imputyear.value 
}) 
