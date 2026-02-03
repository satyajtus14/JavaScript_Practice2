/* 
* First 100 --- > 100;
* 101 - 200 ---> 90;
* Above 200 --> 70;
*/

function layerDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
else if (quantity <= 200){
    const first100total = 100 * first100Price;
    const remainingQuatity = quantity - 100;
    const total = first100total + remainingQuatity;
    return total;
}
else{
    const first100total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuatity = quantity - 200;
    const remainingTotal = remainingQuatity * above200Price;
    const total = first100total + second100Total + remainingTotal;
    return total;
}

}

const total = layerDiscountTotal(201);
console.log(total);
