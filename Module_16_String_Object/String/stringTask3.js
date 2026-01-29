/* 
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/


let str= "hello WoRId"
let vowel= "aeiouAEIOU";

for(let i of str){
    if(vowel.includes(i)){
        console.log(i)
    }
}

