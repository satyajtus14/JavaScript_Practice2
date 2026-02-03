/* 
*Find the duplicate value and remove to array.
*/

function findDuplicate(array){
    const count = [];
     for (const item of array){
    if (count.includes(item) === false){
        count.push(item);
    }
     }
    return count;
}



// Test case and calling function 
const proxyValue = [1,5,61,5,87,7,87,5,81,61,87,81];
const proxyName = ['Lala',' Lulu', 'Zaza', 'Gigi' ,'Fifi','Lala',' Lulu', 'Zaza', 'Gigi' ,'Fifi'];

const dupliCount = findDuplicate(proxyName);
console.log(dupliCount);