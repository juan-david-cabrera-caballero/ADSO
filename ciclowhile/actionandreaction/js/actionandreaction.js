/*
    Name exercise: actionandreaction-WHILE
    Description:Calculation of Newton's Third Law (Action and Reaction)
	autor: juan David cabrera caballero
	date:march 15th 2025
*/

let counter = 0;
let forceTotal = 0;
let forceA = 0;

while (true) {
    forceA = parseFloat(prompt("insert force (N):"));

    if (forceA <= 0) {
        break; 
    }

    counter=counter+1;
    let forceR = forceA;
    forceTotal += forceA;
}

console.log("Cantidad de fuerzas ingresadas: " + counter);
console.log("Última fuerza ingresada: " + forceA);
console.log("Fuerza total acumulada: " + forceTotal);

