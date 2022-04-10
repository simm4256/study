var btn = document.getElementById('btn');
var num = document.getElementById('num');
var increase = (function () {
    var count = 0;
    return function () {
        return ++count;
    };
})();
btn.addEventListener('click', function () {
    //increase는 생성된 순간 내부함수만을 기억하지만, 외부함수의 count를 기억하고 있음
    num.innerHTML = increase();
});
