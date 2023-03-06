// *** EX. FIBONACCI

// La sucesión comienza con los números 0 y 1.
// A partir de estos, «cada término es la suma de los dos anteriores»


// 1) Pintar los dos primeros números de la serie

// let firstOperator = 0;
// let secondOperator = 1;

// console.log(firstOperator);
// console.log(secondOperator);


// 2) Pintar la suma de los dos primeros números de la serie

// let firstOperator = 0;
// let secondOperator = 1;

// console.log(firstOperator);
// console.log(secondOperator);

// const result = firstOperator + secondOperator;
// console.log(result);


// 3) Cambiar los números a sumar y hacer la siguiente suma

// let firstOperator = 0;
// let secondOperator = 1;

// console.log(firstOperator);
// console.log(secondOperator);

// let result = firstOperator + secondOperator;
// console.log(result);

// // *************************

// firstOperator = secondOperator;
// secondOperator = result;

// result = firstOperator + secondOperator;
// console.log(result);


// 4) Repetir último paso tantas veces como queramos

// let firstOperator = 0;
// let secondOperator = 1;

// console.log(firstOperator);
// console.log(secondOperator);

// let result = firstOperator + secondOperator;
// console.log(result);

// // *************************

// firstOperator = secondOperator;
// secondOperator = result;

// result = firstOperator + secondOperator;
// console.log(result);

// // *************************

// firstOperator = secondOperator;
// secondOperator = result;

// result = firstOperator + secondOperator;
// console.log(result);

// // *************************

// firstOperator = secondOperator;
// secondOperator = result;

// result = firstOperator + secondOperator;
// console.log(result);


// 5) Englobar la parte que se repite en un bucle

const fibonacciMaxLaps = 10;
let firstOperator = 0;
let secondOperator = 1;

console.log(firstOperator);
console.log(secondOperator);

for (let i = 0; i <= fibonacciMaxLaps; i++) {
  const result = firstOperator + secondOperator;
  console.log(result);
  firstOperator = secondOperator;
  secondOperator = result;
}
