const heightMark = 169;
const weightMark = 78;
const heightJohn = 195;
const weightJohn = 92;

let BMIjohn = weightJohn / heightJohn ** 2;
let BMImark = weightMark / heightJohn ** 2;

let markHigherBMI = BMImark > BMIjohn;

console.log(BMIjohn);
console.log(BMImark);
console.log(markHigherBMI);
