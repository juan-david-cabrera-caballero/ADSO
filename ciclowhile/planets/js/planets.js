/*
    Name exercise: PLANETS-WHILE
    Description:Write a bulk and select a planet (earth,mars,jupiter) and calculate the gravity, calculate the total and end if bulk is negative
	autor: Juan david cabrera caballero
	date: march 15th 2025
*/

const gravityEarth = 9.81;
const gravityMars = 3.71;
const gravityJupiter = 24.79;

let totalWeight = 0;
let counter = 0;
let mass = 0;

while (mass >= 0) {
    mass = parseFloat(prompt("insert mass: "));

    if (mass >= 0) {
        let option = parseInt(prompt("select planet : 1 earth, 2 mars, 3 jupiter"));
        let gravity = 0;

        if (option === 1) {
            gravity = gravityEarth;
        }
        if (option === 2) {
            gravity = gravityMars;
        }
        if (option === 3) {
            gravity = gravityJupiter;
        }

        if (gravity > 0) {
            let weight = mass * gravity;
            totalWeight += weight;
            counter++;

            console.log("Peso calculado: " + weight);
        }
    }
}

console.log("Total weight acumulet: " + totalWeight);
console.log("counter: " + counter);
