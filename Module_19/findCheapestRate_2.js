const phones = [
    {name:'Samsung',price:20000,camera:'12MP',color:'black'},
    {name:'xoami',price:18000,camera:'12MP',color:'black'},
    {name:'Iphone',price:120000,camera:'12MP',color:'black'},
    {name:'Walton',price:31000,camera:'12MP',color:'black'},
    {name:'HTC',price:27000,camera:'12MP',color:'black'},
]

function getCheapestPrice(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
                min.price = phone.price;
        }
    }
    return min.price;
}


const cheapPrice = getCheapestPrice(phones)
console.log("The cheapest Phone Price:",cheapPrice);


function getExpensivePrice(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
                max.price = phone.price;
        }
    }
    return max.price;
}


const expensivePrice = getExpensivePrice(phones)
console.log("The Expensive Phone Price:",expensivePrice);