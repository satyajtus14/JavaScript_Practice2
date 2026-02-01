/* 
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function chkNum(number){
    let result=0;
    if(number % 2 === 1){
        result = number * 2;
    } else {
        result = number / 3;
    }

    return result;
}

const oddNum = chkNum(5);
console.log('This is the Odd Number:',oddNum);

const evenNum = chkNum(4);
console.log('This is the Even Number:',evenNum);