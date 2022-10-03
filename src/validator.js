
const validator = {
  // ...
  isValid: (numerotarjeta) => {
    //6543210987654321
    // numero de tarjeta en arreglo lon que manda el usuario//
    const numinver = numerotarjeta.split("")

    // arreglo que guarda los numero sumados y miltiplicadosx2 y por 1
    let resultado = []

    // este for recorre el arreglo de nume de tarjeta
    for ( let i=0; i < numinver.length; i++ ){

    // este if solo multiplica los numeros x2
    // los == me indican que es diferente de 0
     if (i % 2 !== 0) {
      
      // esta variable let guarda el resultado que multiplica por2 //
      let multiplicacion = numinver[i]*2
      //verifica si el numero es de dos sifras o no//
      if (multiplicacion >9) {

      // si es de dos sifras con esta variable las separamos eje: 12= 1+2
      // esto se hace convirtiendo en texto(string) y luego ese string pasa arreglo(12=>"12"=>["1"2"])
        let sumadosdigitos = multiplicacion.toString().split('')

        // este let guarda la soma del arreglo (12=>"12"=>["1"2"] =3)
        let suma = 0
        
        //este for recorre el arreglo de sumadosdigitos 1 y 2 "sumadosdigitos.length" el for iria por 1 primero y luego por 2 
        for ( let i=0; i <sumadosdigitos.length; i++ ){

          // esta suma, solo suma los dos digitos 1+2 
          suma += parseInt(sumadosdigitos[i])
        } 
        // este es el resultado de 1+2 es decir 3 y se guarda en el arreglo resultado
        resultado.push(suma)

      } else {
        // este else indica si el numero no es de dos sifra toma el camino del no//
        // se guarda en resultado, solo la multiplicacion.
        resultado.push(multiplicacion)
      } 
     }else {
         // este else es el camino de los numeros que NO se tienen ue multiplicar por 2
        //de igual forma se guarda el numero en "resultado"
        resultado.push(numinver[i])
        
      }
    }
     // esta variable let guarda la suma de todo el arreglo que seria el resultado
    let suma = 0 
    // este for recorre todos los numeros del arreglo
    for ( let i=0; i < resultado.length; i++ ){
      // esto suma numero a numero es decir "P" 
     suma += parseInt(resultado[i])
    }
     // este if comprueba si es valido el numero o no.
     // el % me indica que el reciduo es 0 
    if (suma % 10 === 0){
     return true

    } else { 
      return false
     
    }
   
 

  },
  maskify:(numero) =>{
    //este nuemro actualiza y el split convierte en arreglo
numero = numero.split("") 

// este let guarda los nuemro en gato#
   let mascarilla = ""
  //este let indica a partir de que numero de la tarjeta va a empezar eL recorrido en este caso de 5
  // los ++ significa que va uno a uno con cada numero
  // los i me indican los paso que estan dando. 
  for (let i=0;i<numero.length -4;i++){
    //+= significa que acumula los gatos#
    mascarilla += "#"
  }
  let ultimodigitos = 
    // /,/g ==> cualquier caracter, que hay en toda la cadena de texto se remplace por algo en este caso las"" se remplaza por nada no hay, las comillas borran las comas

    // el slice me devuleve los ultimos 4 digitos del areglo
  numero.slice(-4).toString().replace(/,/g,"") 
  mascarilla +=ultimodigitos
  return mascarilla 
  }
  }


export default validator;
