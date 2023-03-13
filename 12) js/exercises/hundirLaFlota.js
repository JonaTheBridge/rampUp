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