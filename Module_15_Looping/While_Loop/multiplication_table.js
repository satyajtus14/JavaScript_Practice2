/***

As Ersa is learning now, she wants to explore more and more. 
Tell Ersa to generate a multiplication table for number 5

 */

let result;
let number = 5;
let range = 10;

console.log(`Multiplication Table of ${number}:`);

let i = 1;
while (i <= range){
    
    result = i * number;
    console.log(`${number} * ${i} = ${result}`);
    
    i++;
    
}