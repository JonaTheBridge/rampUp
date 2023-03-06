// *** EX. PRIME NUMBERS

// 1) Pintar números entre el 0 y el 20
// const maxLaps = 20;
// for (let numberToAnalize = 0; numberToAnalize < maxLaps; numberToAnalize++) {
//   console.log('numberToAnalize', numberToAnalize);
// }

// 2) Sacar posibles divisores (números intermedios)
// const maxLaps = 20;
// for (let numberToAnalize = 0; numberToAnalize < maxLaps; numberToAnalize++) {
//   console.log('numberToAnalize', numberToAnalize);
//   for (let divisor = 2; divisor < numberToAnalize; divisor++) {
//     console.log('---posibleDivisor', divisor);
//   }
// }

// 3) Ver si los posibles divisores son divisores reales ( x % divisor === 0)
// const maxLaps = 20;
// for (let numberToAnalize = 0; numberToAnalize < maxLaps; numberToAnalize++) {
//   console.log('numberToAnalize', numberToAnalize);
//   for (let divisor = 2; divisor < numberToAnalize; divisor++) {
//     const rest = numberToAnalize % divisor;
//     const isDivisible = rest === 0;
//     if (isDivisible) {
//       console.log('-' + numberToAnalize + ' es divisible entre ' + divisor);
//     }

//     const isNotPrime = isDivisible;
//   }
// }

// 4) Extraer al bucle superior si el número tiene divisores, es decir, si es primo
const maxLaps = 20;
for (let numberToAnalize = 0; numberToAnalize < maxLaps; numberToAnalize++) {
  let isPrime = true;
  for (let divisor = 2; divisor < numberToAnalize; divisor++) {
    const rest = numberToAnalize % divisor;
    const isDivisible = rest === 0;
    if (isDivisible) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log('___ isPrime', numberToAnalize);
  }
}
