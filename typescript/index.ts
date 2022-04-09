var myname = 'kim';

const a = {
    myname: 'sim',
}

function f() {
    console.log(this.myname);
}
let af = () => console.log(this.myname);

f();
f.call(a);
af();
af.call(a);