/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   //return Object.entries(persona)

   let resultado = [];

   for (let clave in objeto) {
     if (objeto.hasOwnProperty(clave)) {
       let subarray = [clave, objeto[clave]];
       resultado.push(subarray);
     }
   }
 
   return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let arr = string.split("").sort();
   let obj = {};

   for (let i = 0; i < arr.length; i++) {

      if (obj.hasOwnProperty(arr[i])) {
         obj[arr[i]]++
      } else {
         obj[arr[i]] = 1

      }
   }
   return obj;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY  yrnehsoy---> HENRYsoy
   // Tu código:
   let arr = string.split("");
   let may = "";
   let min = "";

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].toUpperCase()) {
         may += arr[i]
      } else {
         min += arr[i]
      }
   }

   return `${may}${min}`
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const arr = frase.split(" ");
   let reverse = "";
   for (let i = 0; i < arr.length; i++) {
      reverse += arr[i].split("").reverse().join("");
      if (i !== arr.length - 1) {
         reverse += " ";
      }
   }
   return reverse
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let arr = numero.toString().split("");
   let reverse = arr.slice().reverse()
   if (arr.join("") === reverse.join("")) return "Es capicua";
   return "No es capicua"

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr = string.split("")
   let sinABC = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "a" && arr[i] !== "b" && arr[i] !== "c") {
         sinABC.push(arr[i])
      }
   }
   return sinABC.join("")

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   // arrayOfStrings = arrayOfStrings.sort((a, b) => a.length - b.length);
   // return arrayOfStrings;

   //quickSort 

   if(arrayOfStrings.length <= 1) return arrayOfStrings;

   let pivot = arrayOfStrings[0].length;
   let left = [];
   let right = [];
   let equal = [];
 
   for(let i = 0; i < arrayOfStrings.length; i++){
     if(arrayOfStrings[i].length < pivot){
       left.push(arrayOfStrings[i]);
     }else if(arrayOfStrings[i].length > pivot){
       right.push(arrayOfStrings[i])
     }else{
       equal.push(arrayOfStrings[i])
     }
   }
 
   return sortArray(left).concat(equal).concat(sortArray(right));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         arr.push(array1[i])
      }
   }
   return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
