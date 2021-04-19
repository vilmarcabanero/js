function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  const multiply = (...args) => [...args].reduce((a, b) => a * b, 0);
  return multiply;
}

//console.log(multiplyArguments(2, 4));

const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map((num) => {
//   return num * 2;
// });

const doubleNumArray = numbers.map(num => num * 2);

// console.log(numbers);
// console.log(doubleNumArray);

//Class
// class Person {
//   name = 'Max'
//   printMyName = () => console.log(this.name)
// }
// const person = new Person()
// person.printMyName()

//Spread operator
const oldArray = [4, 5]
const newArray = [1, 2, 3, ...oldArray]
// console.log(newArray)

const oldObject = {
  name: 'Max'
}
const newObject = {
  ...oldObject,
  age: 28
}
// console.log(newObject)

//Arrays 
// map() find() findIndex() filter() reduce() concat() slice() splice()

