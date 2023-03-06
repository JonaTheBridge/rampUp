// ***** Digital hours

const analogicHours = 3;
const analogicMinutes = 3;
const isPm = false;

let digitalHour;
let digitalMinutes;

if (isPm) {
  digitalHour = analogicHours + 12;
} else {
  digitalHour = analogicHours;
}

if (analogicHours === 12 && isPm) {
  digitalHour = '00';
}

if (analogicMinutes === 12) {
  digitalMinutes = '00';
} else {
  digitalMinutes = analogicMinutes * 5;
}

console.log(digitalHour + ':' + digitalMinutes);
