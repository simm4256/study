var _this = this;
var myname = 'Sim';
var user = {
    myname: "John",
    age: 30,
    sayHi: function () {
        // 'this'는 '현재 객체'를 나타냅니다.
        console.log(this.myname);
    },
    af: function () {
        console.log(_this.myname);
    }
};
user.sayHi(); // John
user.af();
