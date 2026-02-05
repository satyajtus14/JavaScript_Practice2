/* 
* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
*/

numbers = [5,6,11,12,98, 5]


function repeatCounter(numbers,find)
{
  let count = 0;

  for(const number  of numbers){
    if(number === find){
        count++;
    }
  }
  return count;
}

const countRepeatNumber = repeatCounter(numbers,5);
console.log('The repeat number is:',countRepeatNumber);