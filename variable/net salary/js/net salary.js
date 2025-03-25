/*
name exercise: example 4
description: percentage of three grades
autor: juan david cabrera
date: 15 of march of 2025
*/

let daysWorked;
let dayValved;

let arl;
let health;
let pension;
let discount;
let salary;
let netSalary;

salary= daysWorked * dayValved;
health= salary * 0,12;
pension= salary * 0,16;
arl= salary * 0,052;
discount= health + pension + arl;
netSalary= salary - discount;

console.log("salary");
console.log("health");
console.log("pension");
console.log("arl");
console.log("discount");
console.log("netSalary");



