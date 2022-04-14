var a = {
    name: 'sim',
    age: 21,
};
var b = {
    sex: 'male',
};
Object.setPrototypeOf(b, a);
console.log(b.name);
