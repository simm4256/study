const btn = document.getElementById('btn');
const num = document.getElementById('num');

const increase = (function (): Function {
    let count = 0;
    return function (): Number {
        return ++count;
    }
})();

btn.addEventListener('click', () => {
    //increase는 생성된 순간 내부함수만을 기억하지만, 외부함수의 count를 기억하고 있음
    num.innerHTML = increase();
})