// *** Ex. Calendar

// STEP 1) Mostrar días del mes
// const daysOfTheMonth = 31;
// for (let i = 1; i <= daysOfTheMonth; i++) {
//   console.log('Dia ' + i + ' => ');
// }

// STEP 2) Mostrar días de la semana (números) cada 7 días
// const daysOfTheMonth = 31;
// const daysOfTheWeekNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = i % daysOfTheWeekNames.length;
//   console.log(currentDayOfTheWeek);
//   console.log('Dia ' + i + ' => ');
// }

// STEP 3) Mostrar días de la semana (nombres) cada 7 días
// const daysOfTheMonth = 31;
// const daysOfTheWeekNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = i % daysOfTheWeekNames.length;
//   console.log('Dia ' + i + ' => ' + daysOfTheWeekNames[currentDayOfTheWeek]);
// }

// STEP -4) Ajustar nombres de los días de la semana
// const daysOfTheMonth = 31;
// const daysOfTheWeekNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = (i % daysOfTheWeekNames.length) - 1;
//   console.log('Dia ' + i + ' => ' + daysOfTheWeekNames[currentDayOfTheWeek]);
// }

// STEP -5) Analizar la causa de los undefineds
// const daysOfTheMonth = 31;
// const daysOfTheWeekNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = (i % daysOfTheWeekNames.length) - 1;
//   console.log(currentDayOfTheWeek);
//   console.log('Dia ' + i + ' => ' + daysOfTheWeekNames[currentDayOfTheWeek]);
// }

// STEP 4) Ajustar nombres de los días de la semana
// const daysOfTheMonth = 31;
// const adaptedDaysOfTheWeekNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = i % adaptedDaysOfTheWeekNames.length;
//   console.log('Dia ' + i + ' => ' + adaptedDaysOfTheWeekNames[currentDayOfTheWeek]);
// }

// STEP 5) Ajustar si el día 1 de mes no fuese lunes
// const daysOfTheMonth = 31;
// const adaptedDaysOfTheWeekNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
// const weeklyDayOfFirstDayOfTheMonth = 2;

// for (let i = 1; i <= daysOfTheMonth; i++) {
//   const currentDayOfTheWeek = (i + weeklyDayOfFirstDayOfTheMonth) % adaptedDaysOfTheWeekNames.length;
//   console.log('Dia ' + i + ' => ' + adaptedDaysOfTheWeekNames[currentDayOfTheWeek]);
// }
