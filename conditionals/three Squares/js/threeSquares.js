/*
	name exercise: area sqares
	description: which area is greater among three squares
	autor: Juan David Cabrera Caballero
	date: march 15th 2025
*/

let squareOne=10;
let squareTwo=0;
let squareThree=10;
let areaOne;
let areaTwo;
let areaThree;

areaOne=squareOne*squareOne;
areaTwo=squareTwo*squareTwo;
areaThree=squareThree*squareThree;

if (areaOne==areaTwo && areaTwo==areaThree){
	console.log("all areas are equals");
}else if(areaOne>areaTwo && areaOne>areaThree){
	console.log("Area One is greatter");
}else if(areaTwo>areaOne && areaTwo>areaThree){
	console.log("Area Two is greatter");
}else if(areaThree>areaOne && areaThree>areaTwo){
	console.log("Area Three is greatter");
}else if(areaOne==areaTwo && areaOne>areaThree){
	console.log("Area One and area Two are greatter");
}else if(areaOne==areaThree && areaOne>areaTwo){
	console.log("Area One and area Three are greatter");
}else if(areaTwo==areaThree && areaTwo>areaOne){
	console.log("Area Two and area Three are greatter");
}