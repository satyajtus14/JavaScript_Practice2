let str='Count how many times a string has the letter A'
let char='A'
let count=0;

for (let i=0; i<str.length; i++)
{
    if(str[i] == char){
        count++;
    }
    
}
console.log(count);