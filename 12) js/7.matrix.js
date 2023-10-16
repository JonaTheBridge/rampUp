const arr1 = ['a', 'b', 'c'];
const arr2 = [{ name: 'Jona' }, { name: 'Matias' }, { name: 'Sergio' }];

const matrix = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

for (let index = 0; index < matrix.length; index++) {
  const row = matrix[index];

  for (let rowIndex = 0; rowIndex < row.length; rowIndex++) {
    const number = row[rowIndex];
    console.log(number); // 1 2 3 4 5 6 7 8 9
  }
}

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (let i = 0; i < arr.length; i++) {
  const number = arr[i];
  console.log(number); // 1 2 3 4 5 6 7 8 9
}
