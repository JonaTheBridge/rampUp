const name = 'Jona';
const age = 32;
const isTeacher = true;

console.log('Mi nombre es ' + name + ' tengo ' + age + ' años y que sea profesor es ' + isTeacher);

// const person = {
//   name: 'Jona',
//   age: 32,
//   isTeacher: true,
// };

// console.log('Mi nombre es ' + person.name + ' tengo ' + person.age + ' años y que sea profesor es ' + person.isTeacher);

const person = {
  name: 'Jona',
  age: 32,
  isTeacher: true,
  address: {
    country: 'Spain',
    city: 'Valencia',
    street: 'xxx',
    number: 1
  },
  getHour: function() {
    return new Date().getHours() + ':' + new Date().getMinutes();
  }
};

console.log(person.getHour());

// replantear el ejercicio del reloj digital pero con un objeto reloj
