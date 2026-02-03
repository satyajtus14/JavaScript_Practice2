/* 
 Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
const heights2 = [167, 190, 120, 165, 137];


function findLowerNum(numbers){
    let count = numbers[0];
    for(const num of numbers){
        if (num < count){
            count = num;
        }
    }
    return count;
}

const lowerNumber = findLowerNum(heights2)
console.log('The Lower Number is:',lowerNumber);
