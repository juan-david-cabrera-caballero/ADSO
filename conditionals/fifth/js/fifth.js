/*
	Name exercise: fifth
	Description: Determine the force of an object and compare it to a limit
	autor:Juan David Cabrera Caballero
	date: march 15th 2025
*/


let bulk = 40;
let acceleration = 25;
let force;

force = bulk * acceleration;

if (force >= 100) {
	console.log("The force is high");
} else {
	console.log("The force is low");
}