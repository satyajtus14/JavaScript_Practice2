/***

As Ersa is learning now, she wants to explore more and more. 
Tell Ersa to generate a multiplication table for number 5

 */

let number = 5;
let range = 10;

console.log(`Multiplication Table of ${number}:`);

for (let i = 1; i <= range; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

