"use strict";
// function logger() {
//   console.log("My name is Elena");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = (birtYear) => 2023 - birtYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

const elena = {
  firstName: "Elena",
  lastName: "C.",
  age: 2023 - 2002,
  job: "student",
  friends: ["Alex", "Peter", "Steven"],
};

console.log(elena);

console.log(elena.age);
console.log(elena["age"]);

const nameKey = "Name";
console.log(elena["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Elena? firstName, lastName, age, job and friends"
);

if (elena[interestedIn]) {
  console.log(elena[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

elena.location = "DK";
