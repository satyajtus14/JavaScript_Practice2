const heights = [65,66,68,72,78,60];

// Let find the Max height to the Above Array

function getMinToArry(numbers){
    let min = numbers[0]

    for (const number of numbers){
        if (number < min){
            min = number;
        }
    }
  return min;
}

const minValue = getMinToArry(heights);
console.log(minValue)