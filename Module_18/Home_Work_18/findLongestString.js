/* 
*Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

function findLongString(str)
{
    let words=str.split(' ');
    let longWord='';

    for(let word of words){
        if (word.length > longWord.length){
            longWord = word;
        }
    }
   
    return longWord;
}

const strLength = findLongString("I am learning Programming to become a programmer");
console.log(strLength);