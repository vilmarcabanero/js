function rotate(arr) {
	let rotated

	for (let i = 0; i < arr.length; i++) {
		rotated = arr[i].shift()
		arr.push(rotated)
	}
	return arr
}

// console.log(rotate([1, 2]))

// function sum(...numbers) {
//   return numbers.reduce(function(acc, currValue) {
//     return acc + currValue
//   })
// }

// const sum = (...numbers) => {
//   return numbers.reduce((a, b) => {
//     return a + b
//   })
// }

// const sum = (...numbers) => numbers.reduce((a, b) => a + b)

// const mean = (...numbers) => numbers.reduce((a, b) => a + b) / numbers.length

// console.log(mean(1, 2, 3))

// const sum = () => {
//   let numbers = Array.from(arguments)
//   return numbers.reduce(function(acc, currValue) {
//     return acc + currValue
//   })
// }

// const sum = (numberArray) => {

// }

// console.log(sum(1, 2, 3))

// let sample = 'hello'
// console.log(sample.indexOf('o'))

const indexOfIgnoreCase = (myString, itsIndex) => {
	return myString.toLowerCase().indexOf(itsIndex.toLowerCase())
}

function indexOfIgnoreCase(a, b) {
	let a1 = a.toLowerCase()
	let b1 = b.toLowerCase()
	return a1.indexOf(b1)
}

console.log(indexOfIgnoreCase('bIT', 'it'))


