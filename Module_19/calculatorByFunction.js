/* 
* Design a calculator by calling function 
*/

function add(num1,num2){

    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multipy(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a,b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if (operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if (operation === 'multipy'){
        const result = multipy(a,b);
        return result;
    }

    else if (operation === 'divide'){
        const result = divide(a,b);
        return result;
    }
   else {
    return "Only 'add','subtract','multipy' and 'divide' operation allowed."
   }
}

const result = calculator(5,7,'subtract')
console.log(result);


