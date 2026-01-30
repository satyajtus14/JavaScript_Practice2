/* 
array-looping-tasks
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let new_color=[];
for(let i=(colors.length -1); i>=0; i--){

    new_color.push(colors[i]);
}
 
 console.log(new_color);

