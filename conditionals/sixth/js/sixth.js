/*
	Name exercise: sixth
	Description: Comparison of two bodies in free fall
	autor:juan David Cabrera Caballero
	date: march 15th 2025
*/

let massOne = 15;
let massTwo = 20;
let forceOne;
let forceTwo;

forceOne = massOne * 9.81;
forceTwo = massTwo * 9.81;

if (forceOne > forceTwo) {
	console.log("bodyOne exerts more force");
} else if (forceTwo > forceOne) {
	console.log("bodyTwo exerts more force");
} else {
	console.log("both forces are equals");
}