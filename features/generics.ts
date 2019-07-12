class ArrayOfNumbers {
  constructor (public collection: number[]) {}

  get (index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor (public collection: string[]) {}

  get (index: string): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor (public collection: T[]) {}

  get (index: number): T {
    return this.collection[index]
  }
}

// Example of generics with functions

function printStrings (arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers (arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T> (arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['ab', 'cd'])

// Generic Constraints

class Car {
  print () {
    console.log('I am a car')
  }
}

class House {
  print () {
    console.log('I am a house')
  }
}

interface Printable {
  print (): void;
}

function printHousesOrCars<T extends Printable> (arr: T[]): void { // Promise that there will be a print method available
  for (let i = 0; i < arr.length; i++) {
    arr[i]
  }
}

printHousesOrCars<House>([new House()])