/* 
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
*/

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function yearlyIncrementSalary(experiences){
    const year5Experience = 5000;
    const year3Experience = 7000;
    const year9Experience = 1000;
    const noExperience = 4000;

      if(experiences === 5){
        let oldSalary = 20000;
        let yearlyIncrement = year5Experience / 12 ;
        let newSalary = Math.round(oldSalary + yearlyIncrement) ;
        return newSalary;
      }
      else if(experiences === 3){
        let oldSalary = 15000;
        let yearlyIncrement = year3Experience / 12 ;
        let newSalary = Math.round(oldSalary + yearlyIncrement) ;
        return newSalary;
      }
      else if(experiences === 9){
        let oldSalary = 30000;
        let yearlyIncrement = year9Experience / 12 ;
        let newSalary = Math.round(oldSalary + yearlyIncrement) ;
        return newSalary;
      }
     else if(experiences === 0){
        let oldSalary = 29000;
        let yearlyIncrement = noExperience / 12 ;
        let newSalary = Math.round(oldSalary + yearlyIncrement) ;
        return newSalary;
      }
      else {
        return "Thank you";
      }
}


const salaryIncrement = yearlyIncrementSalary(5);
console.log("Your Annual Salary Increment is:",salaryIncrement);