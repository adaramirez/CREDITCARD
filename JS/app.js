var creditCardNumber = prompt("Please enter your credit card number"); // Le pedimos al usuario su número de tarjeta por medio de un prompt.

function isValidCard(creditCardNumber){ // creamos la funcion isValidCard que es la que nos pide el ejercicio

  
  var creditCardNumberReverse = (creditCardNumber.split("")).reverse(); // usamos el reverse para invertir el array
  var pairNumbers = []; // variable que necesitamos para guardar los números que tienen la posición par del array
  
  for(var i=0; i < creditCardNumberReverse.length; i++){ // itera los números de la tarjeta, es decir, los recorre uno a uno
    if( i % 2 !== 0) { // condición para poder obtener los números que están en las posiciones pares 
      var multiplication = creditCardNumberReverse[i] * 2; // variable para multiplicar los números obtenidos e invertirlos
        if(multiplication >= 10){ // condición para verificar los números que sean mayores o iguales a diez, ya que estas cifras tienen dos digitos y estos posteriormente serán sumados
          var sum = 0; // variable para indicar que la suma iniciará en el número 0
            
          while (multiplication){ // este while es para los números en posición par, que multiplicados den cifras mayores o iguales a 10
            sum += multiplication % 10; // se extrae el residuo del número % 10
            multiplication = Math.floor(multiplication/10); // redondeamos el cociente de la división con Math.floor que después lo sumará con el residuo.  
        }
        pairNumbers.push(sum); // colocamos los números en posición par de la variable sum 
       } else{
         pairNumbers.push(multiplication); // colocamos los números en posición impar de la variable multiplication
       }
      
    } else 
    pairNumbers.push(parseInt(creditCardNumberReverse[i])); // convertimos el string en entero y los colocamos en el array
  }
 
 var numberToValidate = 0; // creamos una variable numberToValidate para darle un valor de inicio
  for(var j = 0; j < pairNumbers.length; j++){ //itera los números pares (los recorre uno a uno)
    numberToValidate += pairNumbers[j]; //Se concatenan (unen) los números 
  }
  if(numberToValidate % 10 === 0){ // De acuerdo al algoritmo Luhn si la suma te todos los números divididos entre 10 dan un residuo de 0 entonces podemos decir que:
    return "Valid"; // el número es válido
  }else{
    return "Invalid"; // de lo contrario el número es inválido
  }
  //return numberToValidate;
}
//isValidCard(creditNumber);
document.write(isValidCard(creditCardNumber)); // Escribe si el número de la tarjeta es válido o inválido 