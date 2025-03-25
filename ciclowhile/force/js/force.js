/*
    Name exercise: FORCE-WHILE
    Description: Write a mass and aceleration for calculate the force, calculate the total and end if mass or aceleration is negative
	autor: Juan David Cabrera Caballero
	date: march 15th 2025
*/

let mass = 0;
let acceleration = 0;
let totalForce = 0;
let force = 0;
let counter = 0;

while (mass >= 0 && acceleration >= 0) {
    counter=counter+1;

    mass = parseFloat(prompt("insert mass : "));

    acceleration = parseFloat(prompt("insert acceleration: "));

    force = acceleration * mass;

    totalForce = totalForce + force;

    console.log("Force: " + force);
}

console.log("The acumulet forces: " + totalForce);
console.log("counter total: " + counter);
