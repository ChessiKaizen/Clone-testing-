const students = [
  { name: "Sok", age: 20, score: 85 },
  { name: "Dara", age: 21, score: 78 },
  { name: "Vannak", age: 19, score: 92 }
];
console.log('name: '+ students[1].name+' age: '+ students[1].age+' score: '+students[1].score);
console.log("First student name: "+ students[0].name);
for(let i=0;i<students.length;i++){
  console.log("Name "+ students[i].name);
}
console.log("Number of students who scores above 80");
let count=0
for(let i=0;i<students.length;i++){
  if(students[i].score>=80){
   count++;
  }
}
console.log(count);
console.log("Students with score above 80");
for(let i=0;i<students.length;i++){
  if(students[i].score>=80){
   console.log("Name "+ students[i].name);
  }
}
let totalScore = 0;
for (let i = 0; i < students.length; i++) {
  totalScore += students[i].score;
}
let averageScore = totalScore / students.length;
console.log("Average score:", averageScore.toFixed(1));
console.log("Students with highest score");
let max=0;
for(let i=0;i<students.length;i++){
  if(students[i].score>max){
    console.log(students[i].name);
  }
}
console.log("Students who are 20 or above 20 years old");
for(let i=0;i<students.length;i++){
  if(students[i].age>=20){
   console.log("Name "+ students[i].name);
  }
}
console.log("Students' status");
for (let i = 0; i < students.length; i++) {
  let status= students[i].score >= 80 ? "Passed" : "Failed";
  console.log(students[i].name + ": " + students[i].score + " - " + status);
}