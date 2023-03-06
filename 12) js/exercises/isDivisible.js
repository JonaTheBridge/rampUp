// *** EX. DIVISIBLE NUMBERS

const maxLaps = 10;
const divisor = 2;

for (let i = 0; i <= maxLaps; i++) { // 21 laps
  console.log('i = ', i); // only info
  const rest = i % divisor;
  const isDivisible = rest === 0;
  if (isDivisible) {
    console.log('-----' + i + ' es divisible');
  }
}
