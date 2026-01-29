

/*

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let oddNum=81;
let totalSum=0;
while(oddNum <= 131){
    if(oddNum % 2===1){

        totalSum = totalSum + oddNum;
        oddNum+=2;
    } 
    else {
        break;
    }
}
console.log("Sum of all the odd numbers from 81 to 131:",totalSum)  


/*
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let evenNum=206;
let sum=0;
while(evenNum <= 311){
    if(evenNum % 2===0){

        sum = sum + evenNum;
        evenNum+=2;
    }  
    else{
        break;
    }
}
console.log("Sum of all the Even numbers from 206 to 311:",sum);
