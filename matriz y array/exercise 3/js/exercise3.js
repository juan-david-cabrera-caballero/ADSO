/*
	name exercise:Matriz position exercise 3
	description:position simulation using matriz and constant acceleration
	autor:juan david cabrera caballero
	date: 26 of march of 2025
*/

const aceleracion = [2, -1];
const velocidadInicial = [4, 0];
const posicionInicial = [0, 0];
const pasos = 5;
let matriz = [];
let type="o";
for (let iterationTwo = 0; iterationTwo < 2; iterationTwo++) {
    	let positions = [];
    	if (iterationTwo==0) {
      		type="position x";
    	}else{
      	type="position y";
    	}
    	for (let time = 1; time <= pasos; time++) {
        	let positionSeconds = posicionInicial[iterationTwo] + velocidadInicial[iterationTwo] * time + 0.5 * aceleracion[iterationTwo] * time*time;
        	positions.push(positionSeconds);
        	console.log("the second "+ time +" "+ type + " is " + positionSeconds) 
    	}
    matriz.push(positions);
}
console.log(matriz);
