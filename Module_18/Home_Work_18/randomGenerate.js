/* 
Task-5:
Question: Generate a random number between 10 to 20.
**************************************
How it works:
Math.random() → gives a number from 0 to < 1
* 11 → scales it to 0 to < 11
Math.floor() → makes it 0 to 10
+ 10 → shifts range to 10 to 20
*/

const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber); 