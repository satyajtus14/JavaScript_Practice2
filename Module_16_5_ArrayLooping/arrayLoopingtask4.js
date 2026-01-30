/* 
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
const statement = 'I am a hard working person'

let newStr = statement.split(" "); // split by "Blank-space"

console.log(newStr)

let result=[];

for(let i= newStr.length -1; i>=0; i--){
    // result.push(newStr[i] + newStr[i].slice(1)); 
    result.push(newStr[i]); 
}

console.log(result.join(" "));