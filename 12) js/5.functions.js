function add(parameter1, parameter2) {
  console.log('Van a sumarse los números ' + parameter1 + ' y ' + parameter2);
  return parameter1 + parameter2;
  console.log('post return');
}

const addFunction = add;
console.log('addFunction', addFunction);

const argument1 = 3;
const argument2 = 2;
const addResponse = add(argument1, argument2);
console.log('addResponse', addResponse); // addResponse === 5

function subtract(number1, number2) {
  return number1 - number2;
}

function executeOperation(num1, num2, operation) { // operation es un callback
  return operation(num1, num2);
}

const result1 = executeOperation(3, 2, add); // result1 === 5
console.log('result1', result1);

const result2 = executeOperation(3, 2, subtract); // result2 === 1
console.log('result2', result2);
