function sum(a, b) {
    if (typeof a === 'string')
        a = Number(a);
    if (typeof b === 'string')
        b = Number(b);
    return a + b;
}
console.log(sum(1, '2'));
console.log(sum('-12', 13));
