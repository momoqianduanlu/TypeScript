interface Person {
  firstName: String
}

function greeter (person: string) {
  return 'Hello ' + person
}

let user = 'Chen'

console.log(greeter(user))
