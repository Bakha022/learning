// #1
// let initialCount: number = 3

// function getSum(n: number) {
// 	let first_count: number = 1
// 	let second_count: number = 1

// 	for (let i = 1; n >= i; i++) {
// 		first_count *= i * 2
// 		second_count *= i * 2 - 1
// 	}

// 	return first_count + second_count
// }

// console.log(getSum(initialCount))

// #2
// const arr: number[] = [1589, 31851, 512, 180975, 78]

// function getDigitsNumber(array: number[]) {
// 	return array.sort((a, b) => a - b)[arr.length - 1]
// }

// console.log(getDigitsNumber(arr))

// #3

// let array: (number | string | boolean | [] | object)[] = [
// 	1,
// 	'Abdulaziz',
// 	'Elbek',
// 	false,
// 	[],
// 	'Jurabek',
// 	{},
// ]

// function getStringArr(arr: []) {
// 	return arr.filter(element => (typeof element == 'string' ? element : null))
// }

// console.log(getStringArr(array))

// #4
// let str: string = "Hello! How are you? I'm doing great. What's new?"

// function getPunctuationNumber(str: string) {
// 	const punctuationSigns: string[] = [
// 		'!',
// 		'"',
// 		'#',
// 		'$',
// 		'%',
// 		'&',
// 		"'",
// 		'(',
// 		')',
// 		'*',
// 		'+',
// 		',',
// 		'-',
// 		'.',
// 		'/',
// 		':',
// 		';',
// 		'<',
// 		'=',
// 		'>',
// 		'?',
// 		'@',
// 		'[',
// 		'\\',
// 		']',
// 		'^',
// 		'_',
// 		'`',
// 		'{',
// 		'|',
// 		'}',
// 		'~',
// 	]
// 	let count: number = 0

// 	for (let index = 0; index < str.length; index++) {
// 		if (punctuationSigns.includes(str[index])) count += 1
// 	}

// 	return count
// }

// console.log(getPunctuationNumber(str))

// #5

// let str: string = 'Abdulaziz Programmer'

// function switchLetters(str: string) {
// 	let switchString: string = ''
// 	for (let index = 0; index < str.length; index++) {
// 		if (str[index] === str[index].toLowerCase()) {
// 			switchString += str[index].toUpperCase()
// 		} else {
// 			switchString += str[index].toLowerCase()
// 		}
// 	}

// 	return switchString
// }

// console.log(switchLetters(str))

// #6

// let inputObj: object = { a: 1, b: 2, c: 3 }
// function changeObjToArr(obj: Record<string, number>) {
// 	return Object.entries(obj).map(([key, value]) => `${key}${value}`)
// }

// console.log(changeObjToArr(inputObj))

// #7

// type student = {
// 	name: string
// 	isGrant: boolean
// }

// let students: student[] = [
// 	{ name: 'Jurabek', isGrant: false },
// 	{ name: 'Elbek', isGrant: true },
// 	{ name: 'Shamshod', isGrant: false },
// 	{ name: 'Kamola', isGrant: false },
// 	{ name: 'Gulnoza', isGrant: true },
// 	{ name: 'Savlatbek', isGrant: false },
// ]

// function seperateStudent(array: student[]) {
// 	type person = {
// 		grant: string[]
// 		contract: string[]
// 	}

// 	const newObj: person = {
// 		grant: [],
// 		contract: [],
// 	}

// 	array.forEach(element => {
// 		if (element.isGrant) {
// 			newObj.grant.push(element.name)
// 		} else {
// 			newObj.contract.push(element.name)
// 		}
// 	})

// 	return newObj
// }

// console.log(seperateStudent(students))

// #8

// type book = {
// 	name: string
// 	pages: number
// 	isReadFinished: boolean
// }

// const books: book[] = [
// 	{ name: 'The Great Gatsby', pages: 180, isReadFinished: true },
// 	{ name: 'To Kill a Mockingbird', pages: 336, isReadFinished: false },
// 	{ name: 'Atom habits', pages: 328, isReadFinished: true },
// 	{ name: 'Pride and Prejudice', pages: 432, isReadFinished: false },
// 	{ name: 'The Catcher in the Rye', pages: 224, isReadFinished: true },
// 	{ name: 'The Hobbit', pages: 310, isReadFinished: false },
// 	{ name: 'The Lord of the Rings', pages: 1178, isReadFinished: true },
// 	{ name: 'Harry Potter', pages: 320, isReadFinished: true },
// 	{ name: 'Fahrenheit 451', pages: 249, isReadFinished: false },
// 	{ name: 'To the Lighthouse', pages: 209, isReadFinished: true },
// ]

// function getTotalPages(array: book[]) {
// 	let sum: number = 0
// 	array.forEach(element => {
// 		element.isReadFinished ? (sum += element.pages) : sum
// 	})

// 	return sum
// }
// console.log(getTotalPages(books))

// #9

// class Objects {
// 	data: Record<string, any>
// 	arr: string[]

// 	constructor(data: Record<string, any>) {
// 		this.data = data
// 		this.arr = []
// 	}

// 	keys(): void {
// 		for (const key in this.data) {
// 			this.arr.push(key)
// 		}
// 		console.log(this.arr)
// 	}
// }

// let obj = new Objects({ a: 1, b: 2, c: 3 })

// obj.keys()

// #10

// class Students {
// 	firstName: string
// 	lastName: string
// 	university: string
// 	course: number
// 	totalYears: number
// 	isGrant: boolean

// 	constructor(
// 		firstName: string,
// 		lastName: string,
// 		university: string,
// 		course: number,
// 		totalYears: number,
// 		isGrant: boolean
// 	) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 		this.university = university
// 		this.course = course
// 		this.totalYears = totalYears
// 		this.isGrant = isGrant
// 	}

// 	getInfo(): void {
// 		if (this.isGrant) {
// 			console.log(
// 				`${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda grant asosida o'qiydi`
// 			)
// 			console.log(
// 				`${
// 					this.totalYears - this.course
// 				} yildan keyin universitetidan qutuladi.`
// 			)
// 		} else {
// 			console.log('Bu odam student emas!')
// 		}
// 	}
// }

// let student = new Students('Abdulaziz', 'Programmer', 'TATU', 3, 4, true)

// student.getInfo()

// 4.10 E.x

//  #1

// let n: number = 5

// function getSum(n: number) {
// 	let sum: number = 0
// 	for (let index = 1; index <= n; index++) {
// 		sum += index**(index % 2 || 	2)
// 	}

// 	return sum
// }

// console.log(getSum(n))

// #2

// function getLongestWord(arr: string[]) {
// 	return arr.sort((a, b) => a.length - b.length)[arr.length - 1]
// }

// let arr: string[] = ['Abdulaziz', 'Murod', 'Yulduz', "Abdug'affor", 'Jamila']

// console.log(getLongestWord(arr))

// #3

// function getDividers(arr: number[], n: number) {
// 	let index: number = arr.indexOf(n)
// 	let newArray: number[] = []

// 	arr.forEach(element => {
// 		element % n == 0 ? newArray.push(element) : ''
// 	})

// 	return newArray
// }

// let arr: number[] = [2, 5, 7, 10, 0, 18, 15]
// let n: number = 5

// console.log(getDividers(arr, n))

// #4

const str: string = 'Abdulaziz Programmer Is FullStack Developer'

function checkAge(str: string) {
	return str[0] === str[0].toUpperCase()
}

console.log(str.split(' ').every(checkAge))
