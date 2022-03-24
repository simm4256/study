let x = new Date('2022-3-25');

console.log(`${x.getFullYear()}년 ${x.getMonth() + 1}월 ${x.getDate()}일`);

console.log(x.getSeconds());
console.log(x % 60);
console.log(x.getTime() / 1000);
console.log(Math.floor(x.getTime() / 1000) / 60);