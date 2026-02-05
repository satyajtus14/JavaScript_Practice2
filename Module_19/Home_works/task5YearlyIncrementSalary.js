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
    { name: "Shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "Shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "Shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "Shohel", experience: 0, starting: 29000, increment: 4000 },
];

function yearlyIncrementSalary(employees){
  let totalYearlySalary = 0;
  let totalMonthySalary = 0;
  for(const employee of employees){
    const currentSalary = employee.starting + (employee.increment * employee.experience);

  
    totalYearlySalary = totalYearlySalary + currentSalary;

    totalMonthySalary = totalYearlySalary / 12 ;

    console.log(`${employee.name} Yearly Salary: ${currentSalary} and Monthly Salary: ${totalMonthySalary}`);
   
  }
  // const totalMonthySalary = totalYearlySalary / 12 ;

    return totalMonthySalary;
}


const empSalary = Math.round(yearlyIncrementSalary(employees));
// console.log("Employees Monthly total Salary with Increment :",empSalary);