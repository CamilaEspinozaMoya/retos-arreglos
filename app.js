// Ejercicio 1
/*
Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2
}

module.exports = computeAverageLengthOfWords;

// Ejercicio 2
/*
Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/

function getNthElement(array, n) {
  return array[n]
}

module.exports = getNthElement;

// Ejercicio 3
/*
Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notas:

Para hacer este problema, debes estar familiarizado con String.split, y Array.join.
*/

function convertDoubleSpaceToSingle(str) {
  let separar = str.split("  ");
  let singleSpace = separar.join(" ");
  return singleSpace
}

module.exports = convertDoubleSpaceToSingle;

// Ejercicio 4
/*
Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true
*/

function areValidCredentials(name, password) {
  if(name.length > 3 && password.length > 8){
    return true
  }else{
    return false
  }
}

module.exports = areValidCredentials;

// Ejercicio 5
/*
Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(array, number) {
  for (var i = 0 ; i < array.length ; i++) {
    let par = array[i] 
    let sub = (array.slice(0, i)).concat(array.slice(i+1, array.length));
    
    for (var j = 0; j < sub.length ; j++) {
      if (par + sub[j] === number) {
        return [pair, sub_arr[j]];
      }
    }
  }

} 

module.exports = findPairForSum;

