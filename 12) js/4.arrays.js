// ***** ARRAYS *****

const daysOfTheWeekNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(daysOfTheWeekNames[0]);
// console.log(daysOfTheWeekNames[1]);
// console.log(daysOfTheWeekNames.length);
// console.log(daysOfTheWeekNames[daysOfTheWeekNames.length]);
// console.log(daysOfTheWeekNames[daysOfTheWeekNames.length - 1]);


const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// console.log(months[0]);
// console.log(months[2]);
// console.log(months[10]);
// console.log(months[11]);


// for (let index = 0; index < months.length; index++) {
//   if (index % 2 === 0) {
//     const month = months[index];
//     console.log(month);
//   }
// }

for (let index = 0; index < months.length; index+=2) {
  const month = months[index];
  console.log(month);
}
