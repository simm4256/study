function a() {
    this.num1 = 1;
    function b() {
        this.num2 = 2;
        console.log(this);
        console.log(this.num1);
        console.log(this.num2);
    }
    return b;
}


let x = a();
x();