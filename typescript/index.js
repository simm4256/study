let a;
a = [1, 'a'];
var x;
(function (x) {
    x["main"] = "main";
    x["game"] = "game";
})(x || (x = {}));
;
let y = {
    main: 'main',
    game: 'game',
};
let str = 'main';
console.log(y[str]);
