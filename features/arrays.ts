const carMakers: string[] = []
const dates = [new Date()]

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro'],
]

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Flexible types
const importantDates = [new Date(), '2030-10-10']