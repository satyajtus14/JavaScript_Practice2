/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for(let num = 55; num <= 85; num++)
{
   if(num % 2 === 1) {
    console.log("The number is odd:",num)
   }
   else (num % 5 === 0)
   {
    continue;
   }

}