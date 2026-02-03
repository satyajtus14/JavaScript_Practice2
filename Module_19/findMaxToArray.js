const heights = [65,66,68,72,78,60];

// Let find the Max height to the Above Array

function getMaxArray(numbers){

    let max = numbers[0];
    for(const num of numbers){
      if (num > max){
        max = num;
      }

    }
    
    return max;
}

const maxValue = getMaxArray(heights);
console.log(maxValue)