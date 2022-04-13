var myname = 'Sim';
let user = {
    myname: "John",
    age: 30,

    sayHi() {
        // 'this'는 '현재 객체'를 나타냅니다.
        console.log(this.myname);
    },

    af: () => {
        console.log(this.myname);
    }

};

user.sayHi(); // John
user.af();