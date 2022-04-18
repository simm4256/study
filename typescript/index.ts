let a = {
    name: 'sim',
    age: 21,
}

let b = {
    sex: 'male',
}

Object.setPrototypeOf(b, a);
Object.getPrototypeOf(b).id = 'asd';
console.log(Object.getPrototypeOf(b).id);
console.log(a.id);