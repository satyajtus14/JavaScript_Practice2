/* 
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(names) {
    if (names.length === 0) {
        return null;
    }

    let smallest = names[0];

    for (let i = 1; i < names.length; i++) {
        if (names[i].length < smallest.length) {
            smallest = names[i];
        }
    }
    return smallest;
}

const smallestName = findSmallestName(heights2);
console.log('The Smallest Name is:',smallestName); 