function sum(a: number, b: number): number;
function sum(a: number, b: string): number;
function sum(a: string, b: number): number;
function sum(a: string, b: string): number;
function sum(a: number | string, b: number | string): number {
    if (typeof a === 'string')
        a = Number(a);
    if (typeof b === 'string')
        b = Number(b);
    return a + b;
}

console.log(sum(1, '2'));
console.log(sum('-12', 13));