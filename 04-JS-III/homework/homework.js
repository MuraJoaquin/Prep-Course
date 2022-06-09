// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  var lista = [1,2,3,4]
  return lista [0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length -1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array [array.length];
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  NuevoArray = []
  for (var i = 0; i < array.length; i++){
    NuevoArray[i] = array[i] + 1;
  }
  return NuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
 
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for (var i = 0; i <array.length; i++){
    if (array(i) === elemento){
      return true;
    }
 }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var suma = 0
  for (var i = 0; i < numeros.length; i++){
    suma = suma + numeros(i) ;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var enteros = 0
  for (var i = 0; i < resultadosTest.length; i++){
    enteros = enteros + resultadosTest(i);
  }
  return enteros/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  var masGrande = 0
  for (var i = 0; i <numeros.length; i++){
    if (numeros(i) > masGrande){
      masGrande = numeros(i);
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  if (arguments.length < 1){
    return 0
  }
  var total = 1
  for (var i = 0; i < arguments.length; 1++){
    total = total * arguments(i);
  }
  return total
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  let contador = 0
  for (var i = 0; i < arreglo.length; i++){
    if (arreglo(i) > 18){
      contador++
    }     
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }  
  return 'Es dia laboral';
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  for (var i = 0; i < arreglo.length; i++){
    if (arreglo(i) !== arreglo(i+1)){
      return false;
    }
  }
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var meses = []
  for(var i = 0; i < array.length; i++){
    if(array(i) === 'Enero' || array(i) === 'Noviembre' || array(i) === 'Marzo' ){
      meses.push(array(i));     
    }
  }
  if (meses.length <3){
    return 'No se encontraron los meses pedidos' ;
  } else {
    return meses;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. sólRecorrer el array y guardar en un nuevo array o los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  mayores100 = [];
  for (var i = 0; i < array.length; i++){
    if (array(i) > 100){
      mayores100.push(array(i));
    }
  }
  return mayores100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  nuevoArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++){
    suma = suma + 2;
    if (suma === i) { break;}
    else {
      nuevoArray.push(suma);
    }
  }
  if (i < 10){
    return 'Se interrumpio la ejecucion';
  } else {
      return nuevoArray;
    }
    
  
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  nuevoArray = [];
  suma = numero;
  for (var i = 0; i < 10; i++){
    if (i = 5){
      continue;  
    } else {
      suma = suma + 2;
      nuevoArray.push(suma);
    }
    
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
