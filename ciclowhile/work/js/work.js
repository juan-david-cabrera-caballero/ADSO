/*
	Name exercise: Work Machine
	Description: Calculate work with force and distance
	autor:juan David cabrera caballero
	date: march 15th 2025
*/

let counter = 0;
let workTotal = 0;

while (true) {
    let distance = parseFloat(prompt("insert the distance (m):"));
    if (distance <= 0) {
        break;
    }

    let forceA = parseFloat(prompt("insert the force (N):"));
    let work = forceA * distance;

    counter = counter + 1;
    workTotal = workTotal + work;
}

console.log("Total work done: " + workTotal );
console.log("Number of calculations: " + counter);
