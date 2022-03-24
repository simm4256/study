class MyStr {
    #s = '';
    constructor(s) {
        this.#s = s;
    }
    set s(str) {
        this.#s = str;
    }
    get s() {
        return this.#s;
    }
    changeByIndex(startIndex, lastIndex, newStr) {
        this.#s = this.#s.slice(0, startIndex) + newStr + this.#s.slice(lastIndex);
    }
}

function* fn() {
    console.log(1);
    yield;
    let x = yield "숫자를 입력하세요 : ";
    console.log(x);
    console.log(3);
    return;
}

let a = fn();
a.next();
a.next();
a.next(4);
