/*
	Name exercise: gravityPotentialEnergy Potential Gravity
	Description: Calculate potential energy grativy
	autor: Juan david cabrera Caballero
	date: march 15th 2025
*/

let counter = 0;
let energyTotal = 0;
const gravity = 9.81;

while (true) {
    let height = parseFloat(prompt("Enter the height :"));
    if (height <= 0) {
        break;
    }

    let mass = parseFloat(prompt("insert the mass :"));
    let energy = mass * gravity * height;

    energyTotal = energyTotal + energy;
    counter = counter + 1;
}

console.log("Total potential energy: " + energyTotal);
console.log("Number of calculations: " + counter);
