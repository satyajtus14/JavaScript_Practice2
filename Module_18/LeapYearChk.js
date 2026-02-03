/* 
* Check Leap- If year will be a leap year if the year is divisible by 4;
*/

function leapYear(year){
         if(year % 4 === 0){
            return true;
         }
         else {

             return false;
         }
}

console.log(leapYear(2030));

/* 
* Check Leap- Those year that is not divible by 100 and if that year is divible by 4 then it will be a leap year;
*/
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}

const leapYearChk = isLeapYear(2028);
console.log(leapYearChk);