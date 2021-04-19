// const avionSchool = {
//   listOfStudents: ["Max", "Vil", "She", "Round"],
//   numberOfStudents: 4,
//   courses: ["Math", "Science", "Recess", "ML"],
//   fireInstructor: function () {
//     console.log(
//       `${this.listOfStudents[3]} is fired! No. of students is ${this.numberOfStudents}`
//     );
//   },
// };

// const entropiya = {
//   listOfStudents: ["Callie", "Khali", "Round"],
//   numberOfStudents: 3,
//   courses: ["Math", "Science", "ML"],
//   fireInstructor: function () {
//     console.log(
//       `${this.listOfStudents[2]} is fired! No. of students is ${this.numberOfStudents}`
//     );
//   },
// };

// class School {
//   constructor(listOfStudents, numberOfStudents, courses) {
//     this.listOfStudents = listOfStudents;
//     this.numberOfStudents = numberOfStudents;
//     this.courses = courses;
//   }
// }

class School {
	constructor(listOfStudents, numberOfStudents, courses) {
		this.listOfStudents = listOfStudents
		this.numberOfStudents = numberOfStudents
		this.courses = courses
	}
}

School.prototype.fireInstructor = function () {
	console.log(
		`${this.listOfStudents[2]} is fired! No. of students is ${this.numberOfStudents}`
	)
}

const avionSchool = new School(['Max', 'Vil', 'She', 'Round'], 4, [
	'Math',
	'Science',
	'Recess',
	'ML',
])

// console.log(avionSchool)
// console.log(avionSchool.fireInstructor())

// console.log(school['listOfStudents'])

//

// console.log(school);
// console.log(school.fireInstructor());

let groupOfObjects = [
	{ listOfStudents: ['Max', 'Vil', 'She', 'Round'], numberOfStudents: 4 },
	{ numberOfStudents: 4, courses: ['Math', 'Science', 'Recess', 'ML'] },
	{
		courses: ['Math', 'Science', 'Recess', 'ML'],
		fireInstructor: function () {
			console.log(
				`${this.listOfStudents[3]} is fired! No. of students is ${this.numberOfStudents} `
			)
		},
	},
]

// console.log(groupOfObjects);

const createKiss = (hahalikan, hahalik, cb) => {
	return cb(hahalikan, hahalik)
}

const kiss = (hahalikan, hahalik) => {
	console.log(`Hinalikan ni ${hahalik} si ${hahalikan}!`)
}

kiss('Callie', 'Bilog')

// createKiss('Callie', 'Bilog', kiss)

// console.log(createKiss('Callie', hahalik))

function gross(net) {
	let vat = 20
	let tax = (net * vat) / 100
	return net + tax
}

function addWithVat(netX, netY) {
	let grossX = gross(netX)
	let grossY = gross(netY)
	return grossX + grossY
}

const added = addWithVat(500, 400)
