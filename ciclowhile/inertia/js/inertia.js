/*
    Name exercise: inertia
    Description: Write a force and calculate the equivalent force, calculate the total and end if the force is 0 and the times of the procedure.
	autor: juan david cabrera caballero
	date: march 15th 2025
*/
let velocity = 0;
let distanceTotal = 0;
let seconds = 0;
const time = 15;

while (true) {
    let force = parseFloat(prompt("insert the force:"));
    if (force <= 0) {
        break; 
    }

    let mass = parseFloat(prompt("insert the mass (kg):"));
    let acceleration = force / mass;

    velocity = velocity + (acceleration * time);
    distanceTotal = distanceTotal + (velocity * time);
    seconds = seconds + 1;
}

console.log("Elapsed time: " + seconds);
console.log("Total distance traveled: " + distanceTotal);
console.log("Final velocity: " + velocity);


