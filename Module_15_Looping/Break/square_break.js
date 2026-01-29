/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 1;
while( i <= 100) {
    i= i*i;
    console.log("I have found square number",i)
    if(i === (i*i))
    {
        break;
        
    }
    i++;
}