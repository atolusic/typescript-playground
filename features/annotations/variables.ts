let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let bools: boolean[] = [true, true, false]

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number }  = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

let words = ['red', 'green', 'blue']
let foundWord: boolean

words.forEach(w => {
  if (w === 'green') {
    foundWord = true
  }
})

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

numbers.forEach(n => {
  if (n > 0) {
    numberAboveZero = n
  }
})


