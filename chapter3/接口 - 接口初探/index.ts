// function printLabel(labelledObj: {label: string}) {
//   console.log(labelledObj.label)
// }

// let myObj = {size: 10, label: 'size 10 Object'}

// printLabel(myObj)

interface labelledValue {
  label: string
}

function printLabel(labelledObj: labelledValue) {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'size 10 Object'}

printLabel(myObj)