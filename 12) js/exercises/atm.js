const cashRequested = 162.39;

const bill500Quantity = Math.floor(cashRequested / 500);
let rest = cashRequested % 500;

const bill200Quantity = Math.floor(rest / 200);
rest = rest % 200;

const bill100Quantity = Math.floor(rest / 100);
rest = rest % 100;

const bill50Quantity = Math.floor(rest / 50);
rest = rest % 50;

const bill20Quantity = Math.floor(rest / 20);
rest = rest % 20;

const bill10Quantity = Math.floor(rest / 10);
rest = rest % 10;

const bill5Quantity = Math.floor(rest / 5);
rest = rest % 5;

const coin2Quantity = Math.floor(rest / 2);
rest = rest % 2;

const coin1Quantity = Math.floor(rest / 1);
rest = rest % 1;

const coin05Quantity = Math.floor(rest / 0.5);
rest = rest % 0.5;

const coin02Quantity = Math.floor(rest / 0.2);
rest = rest % 0.2;

const coin01Quantity = Math.floor(rest / 0.1);
rest = rest % 0.1;

const coin005Quantity = Math.floor(rest / 0.05);
rest = rest % 0.05;

const coin002Quantity = Math.floor(rest / 0.02);
rest = rest % 0.02;

const coin001Quantity = Math.floor(rest / 0.01);
rest = rest % 0.01;

console.log('cashRequested: ', cashRequested);
if (bill500Quantity !== 0) {
  console.log('bill500Quantity: ' + bill500Quantity);
}

console.log('bill200Quantity: ' + bill200Quantity);
console.log('bill100Quantity: ' + bill100Quantity);
console.log('bill50Quantity: ' + bill50Quantity);
console.log('bill20Quantity: ' + bill20Quantity);
console.log('bill10Quantity: ' + bill10Quantity);
console.log('bill5Quantity: ' + bill5Quantity);

console.log('coin2Quantity: ' + coin2Quantity);
console.log('coin1Quantity: ' + coin1Quantity);
console.log('coin05Quantity: ' + coin05Quantity);
console.log('coin02Quantity: ' + coin02Quantity);
console.log('coin01Quantity: ' + coin01Quantity);
console.log('coin005Quantity: ' + coin005Quantity);
console.log('coin002Quantity: ' + coin002Quantity);
console.log('coin001Quantity: ' + coin001Quantity);

console.log('rest: ' + rest);
