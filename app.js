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

