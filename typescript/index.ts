let a = {
    name: 'sim',
    age: 21,
}

let b = {
    sex: 'male',
}

Object.setPrototypeOf(b, a);

console.log(b.name);