/* 
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected output:
John scored 85
Alice scored 90
*/

const student = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];
for(let i in student)
  {
  let stuDisplay = student[i].name +" Scored "+  student[i].marks;
  console.log(stuDisplay);

}

    
