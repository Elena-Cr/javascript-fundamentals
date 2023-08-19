const age = 14;

if (age >= 18) {
  console.log(`Sarah can start driving licence `);
} else {
  console.log(`Sarah is not old enough; she needs to wait ${18 - age} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
