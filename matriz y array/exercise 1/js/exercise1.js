/*
	name exercise:Matriz Force+Mass*Objet exercise 1
	description:calculation acceleration from forces
	autor: juan david cabrera caballero
	date: 26 of march of 2025
*/

const mass = [2, 4, 3];
const force = [
  [10, 5, 0],
  [4, -3, 2],
  [0, 0, 6]
];

let iterationOne;
let iterationTwo;
let resul = 0;
let acceleration = [];

for (iterationOne = 0; iterationOne < 3; iterationOne++) {
  for (iterationTwo = 0; iterationTwo < 3; iterationTwo++) { 
    resul = force[iterationOne][iterationTwo] / mass[iterationTwo];
    acceleration.push(resul);
  }
}

console.log(acceleration);