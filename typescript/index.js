var _this = this;
var myname = 'kim';
var a = {
    myname: 'sim',
};
function f() {
    console.log(this.myname);
}
var af = function () { return console.log(_this.myname); };
f();
f.call(a);
af();
af.call(a);
