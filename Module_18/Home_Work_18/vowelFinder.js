/* 
Write a function to count the number of vowels in a string.
*/


function vowelFinder(str){

let vowel= "aeiouAEIOU";
let count=0;
for(let i of str){
    if(vowel.includes(i)){
        count++;
    }
}
return count;
}

const getVowel = vowelFinder("I am learning Programming to become a programmer");
console.log(getVowel);