interface Person {
  firstName: string,
  lastName: string
}

function greeter (person: Person) {
  return 'Hello ' + person
}

let user = {
  firstName: 'GuoSheng',
  lastName: 'Chen'
}

console.log(greeter(user))
