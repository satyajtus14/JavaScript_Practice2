const today = new Date();
console.log(today);


const fuDate = new Date('2062-10-09');
console.log(fuDate.getMonth());
console.log(fuDate.getDay());

const specificDate = new Date(2091,0,26)
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate)
console.log(specificDate.toLocaleDateString('en-US'))