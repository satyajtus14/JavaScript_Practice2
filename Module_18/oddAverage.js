/* 
Create a function takes an array as parameter
give the average of the odd numbers in the array.
*/

function oddAvg(numbers){

    const sum = [];
     for(const number of numbers){
        if(number % 2 ===1){
            // console.log(number);
            sum.push(number);
        }
     }
     
    // The array hold the all odd number.
    let count = 0;
    for(const num of sum){
        count = count + num;
    }
    const averageOdd = count / sum.length;
    return averageOdd;
}

const num = [42,13,57,5,10,7,23]
const avgOdd= oddAvg(num);
console.log(avgOdd)