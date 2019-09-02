function padLeft (value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ')
  }

  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got ${padding}`)
}

padLeft('Hello World', 4)



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
pet.layEggs()
pet.swim()