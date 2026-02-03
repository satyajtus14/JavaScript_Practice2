function getMaxValue (num1 , num2){
     if( num1 > num2){
        return num1;
     }
     else {
        return num2;
     }

}

const findValueMax1 = getMaxValue(100,40)
console.log(findValueMax1);

const findValueMax2 = getMaxValue(200,345)
console.log(findValueMax2);

const ultimeMax = getMaxValue(findValueMax1 , findValueMax2);
console.log(ultimeMax);