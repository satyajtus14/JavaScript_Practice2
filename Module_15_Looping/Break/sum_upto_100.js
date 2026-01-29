/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum=0;
for(num = 1; num <= 100; num++){
    
    sum = sum + num;
    if(sum >=100)
        {
        break;
    }
}
console.log("Sum of Number but stop adding when sum reaches or exceeds 100", sum);
