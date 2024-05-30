
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function
const simplified2 = nums.map(num => num * 2);
console.log(simplified2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// Exercise
// Like this you have access to an array of objects: what you log is more 
// clear and readable, but the code is more verbose
const studentsWithIds = students.map(student => ({
  name: student.name,
  id: student.id,
}));
console.log(studentsWithIds);

// Like this you have access to an array of arrays (of tuples, actually)
const studentsWithIds2 = students.map(student => [student.id, student.name]);
console.log(studentsWithIds2);