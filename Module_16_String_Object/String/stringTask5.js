let str='next level experience';

let newStr = str.split(" ");  // split make full string in a array

let result = []; // blank array to help the store output

for (let i = 0; i < newStr.length; i++) // newStr.length = 3 [next, level, experience]
    {
  result.push(newStr[i][0].toUpperCase() + newStr[i].slice(1)); 
  // every index first character make upper then concat rest of characters by ".slice" keyword
//   .push-- Adds a value to the end of an array and stores them in 'result[]'
}

console.log(result.join(" ")); // .join() Converts an array into a string by adding " " (space) between elements
