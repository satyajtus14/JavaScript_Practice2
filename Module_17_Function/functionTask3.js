/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/
function make_avg(numbers , size){

    let sum =0;
    for (let i =0; i<size; i++){
        sum += numbers[i];
             
    }

    let avg = sum /size ;
    return avg;
}

const avrNum= [5,2,1,3];
console.log(make_avg(avrNum,avrNum.length))