 /*
 Find Max value from three sample input values 
 */

 function getMaxValueIn3(num1,num2,num3){
    if((num1 > num2) && (num1 > num3)){
        return num1;
    }
    else if((num2 > num1) && (num2 > num3)){
        return num2;
    }

    else {
        return num3;
    }
 }

 const findMaxValue3 = getMaxValueIn3(20,10,40);
 console.log(findMaxValue3);
 