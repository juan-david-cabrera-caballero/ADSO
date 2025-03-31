/*
	Name exercise:function aceleration
	Description:Function that receives force and mass, and returns acceleration
	autor: Juan David Cabrera Caballero
	date: march 27th 2025
*/

function acelerationFunction(force,mass){
	let aceleration = force/mass;
	console.log(`the aceleration is ${aceleration}`);
	return aceleration;
}

acelerationFunction(12,3);