setTimeout(() => {
    console.log('timeout');
}, 0);
let x = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('timeout in promise');
        res(1);
    }, 0);
    console.log('promise');
}).then(() => {
    console.log('then');
});
