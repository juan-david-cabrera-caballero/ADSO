/*
	Name exercise:function aditation
	Description:Function that receives an array and returns the sum
	autor: Juan David Cabrera Caballero
	date: march 27th 2025
*/

let add
function addArray(number){
	let add = 0;
	for(iterationOne=0; iterationOne<5; iterationOne++){
		add+=number[iterationOne];
	}
	console.log(`the adition is ${add}`);
}
let numbers=[2,3,4,5,7];
addArray(numbers)