/* 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
function count_zero(str){
       let str_brake = str.split("");
    //    console.log(str_brake)
     let result=[];

     for(let i=0; i<= str_brake.length; i++){
        if (str_brake[i] === '0')
            
       result.push(str_brake[i]);
     }
     const binarySum = result.length;      
    return binarySum;
}

console.log(count_zero('00110011001010'))