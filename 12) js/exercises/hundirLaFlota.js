let aircraftCarrier = 5;
let vessel = 4;
let submarine = 3;
let cruise = 2;
let boat = 1;


const water = '~';
const hit = 'X';
const sunk = '*';

const yCoordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const myBoard = [
  ['1', '', '2', '2', '', '3', '3', '3', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['4', '4', '4', '4', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['5', '5', '5', '5', '5', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

const IABoard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

function printIABoard() {
  for (let i = 0; i < IABoard.length; i++) {
    console.log(yCoordinates[i] + ') ' + IABoard[i].join(' | '));
  }
}

function IAShot(row, column) {
  const symbol = myBoard[row][column];
  switch (symbol) {
    case '1':
      boat--;
      IABoard[row][column] = sunk;
      break;
    case '2':
      cruise--;
      if (cruise) {
        IABoard[row][column] = hit;
      } else {
        IABoard[row][column] = sunk;
      }

      break;
    case '3':
      submarine--;
      if (submarine) {
        IABoard[row][column] = hit;
      } else {
        IABoard[row][column] = sunk;
      }

      break;
    case '4':
      vessel--;
      if (vessel) {
        IABoard[row][column] = hit;
      } else {
        IABoard[row][column] = sunk;
      }

      break;
    case '5':
      aircraftCarrier--;
      if (aircraftCarrier) {
        IABoard[row][column] = hit;
      } else {
        IABoard[row][column] = sunk;
      }

      break;
    default:
      IABoard[row][column] = water;
      break;
  }

  console.log(yCoordinates[row] + '' +  (column + 1) + ' === ' + IABoard[row][column]);
}

let turn = 1;
while (boat || cruise || submarine || vessel || aircraftCarrier) {
  const row = Math.floor(Math.random() * 10);
  const column = Math.floor(Math.random() * 10);
  if (IABoard[row][column] === ' ') {
    console.log('----- Turn ' + turn + ' -----');
    IAShot(row, column);
    printIABoard();
    turn++;
  }
}







// https://es.wikipedia.org/wiki/Batalla_naval_(juego)

// 2 tableros de 10 x 10 (A-J vertical / 1-10 horizontal)

// tablero 1) donde colocamos nuestro barcos
// tablero 2) donde se anotarán los disparos

// Símbolos: ' ' = sin atacar / ~ = agua / X = tocado / * = hundido

// Barcos: 5 = portaaviones; 4 = buque; 3 = submarino; 2 = crucero; 1 = lancha



// Reglas:
// No se podrán colocar barcos pegados entre sí.
// Gana el jugador que hunda la flota en menos turnos



// Herramientas:

// Math.random() === número entre 0 y 0.99999999...

// Obtener un número aleatorio entre dos valores determinados (max excluido)
// Math.random() * (max - min) + min
// 0 * (10 - 1) + 1 === 1
// 0.99999999 * (10 - 1) + 1 === 8.99999991 + 1 === 9.99999991

// Obtener un número entero entre dos valores determinados (max excluido)
// Math.floor(Math.random() * (max - min) + min)
// Math.floor(0 * (10 - 1) + 1) === 1
// Math.floor(0.99999999 * (10 - 1) + 1) === Math.floor(9.99999991) === 9

// Si el min es cero...
// Math.floor(0.5 * (10 - 0) + 0) === Math.floor(0.5 * 10) === 5
// Math.floor(Math.random() * max)



// Estrategias:
// https://www.neoteo.com/la-mejor-estrategia-para-batalla-naval/

// La forma más simple, para atacar es efectuando disparos al azar.
// ¿? disparos de media

// Si las coordenadas han sido ya disparadas, generar otra coordenada.
// Más de 95 disparos de media

// Si el disparo ha “tocado”, casillas adyacentes.
// Entre 95 y 70 disparos de media

// Si el disparo ha “tocado” 2 veces, mantener el rumbo.
// Entre 70 y 60 disparos de media

// Estrategia paridad (Una si y una no)
// Algo mejor, pero casi insignificante

// Función de densidad de probabilidad
// Tener en cuenta la longitud de los barcos para atacar los huecos donde quepan
// 40 disparos en promedio