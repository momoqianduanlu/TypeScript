interface Bird {
  fly ()

  layEggs ()
}

interface Fish {
  swim ()

  layEggs ()
}

function getSmallPet (): Bird | Fish {
  // ...
}

let pet = getSmallPet()

/**
  if ((pet as Fish).swim) {
    (pet as Fish).swim()
  } else if ((pet as Bird).fly) {
    (pet as Bird).fly()
  }
 */

// 类型保护

// 1. 类型谓词

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

function isFish (pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined
}




function isNumber (x: any): x is number {
  return typeof x ==='number'
}

function isString (x: any): x is string {
  return typeof x === 'string'
}

function padLeft (value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ')
  }

  if (isString(padding)) {
    padding + value
  }
  throw new Error(`Expected string or number, got ${padding}`)
}

// 2. typeof 类型保护
function paddingLeft (value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ')
  }

  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got ${padding}`)
}

// 3. instanceof 类型保护
class Bird {
  fly () {
    console.log('bird fly')
  }

  layEggs () {
    console.log('bird lay eggs')
  }
}

class Fish {
  swim () {
    console.log('fish swim')
  }

  layEggs () {
    console.log('fish lay eggs')
  }
}

function getRandomPet (): Bird | Fish {
  return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pets = getRandomPet()

if (pets instanceof Bird) {
  pets.fly()
}

if (pets instanceof Fish) {
  pets.swim()
}
