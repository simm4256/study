# 변수

### 선언
* ```javascript (None), var, let, const``` : (None), var는 중복 가능하므로 지양, let은 중복불가 & 값변경 가능, 
* ```const```는 상수

### 리터럴 종류
* ```number, boolean, string, object, function```

### 형변환
* ```Number(str), String(x)``` : 단순형변환
* ```Number('<many>')=0, Number('a1')=NaN```

### 객체(object)
* ```let obj = {a:1, b:`str`, c:function(){} }``` 과 같이 선언
* ```for(i in obj) console.log(i);``` //객체의 변수 이름을 string으로 출력. obj[i] 형태로 값도 볼 수 있음
* ```Object.keys(obj), Object.values(obj), Object.entries(obj)``` : 객체의 요소들을 배열로 반환
* ```Object.assign(obj1, obj2, obj3)``` : obj1에 obj2, obj3을 추가한 후 obj1 반환. (obj1도 바뀜에 주의)

  * obj1에 빈 객체 {}를 써서 obj2와 obj3을 추가한 객체를 '복사'하는 용도로 많이 쓰임


<br><br>
# 반복문

### for _
* ```for in``` : 객체(prototype까지), 클래스(prototype 제외)
* ```for of``` : iteratable (array, map, set, string 등)한 자료 대해 각 속성값 반복
* ```forEach``` : 배열에서만 사용

### iterable, iterator
* `iterable` : 반복가능한 객체, `iterator` : 반복자
* `iterator`를 반환하는 `Symbol.iterator()` 메소드가 있어야 함
* `iterator`는 `{value, done}을 반환하는 `next()` 메서드를 가짐
* String, Array, TypedArray, Map, Set, Generator function


<br><br>
# 문자열

### 개요
* 백틱(\`)으로 감싸기 (보간 : ``` `asd $(var)` ```)
* 따옴표(')나 큰따옴표(")도 사용 가능하지만 보간과 \n 없는 줄바꿈 지원 x
* 백틱이나 따옴표,큰따옴표의 성능 차이는 없으므로 가급적 백틱 사용
* JS에서 ```String```은 <strong>immutable value</strong>이기 때문에 값 변경 불가능

### 서브문자열
* ```str.slice(beginIndex, endIndex)``` : 인덱스에 음수 사용 가능, endIndex 전까지만 포함되는것에 주의
* ```str.substr(beginIndex, count)``` : 두 번쨰 인수가 index가 아닌 count(개수)임에 주의

### 검색 
* ```str.indexOf(searchValue, fromIndex)``` : 시작위치 반환 / 없으면 -1반환 / fromIndex default : 0 
* ```str.search(regexp)``` : 0부터 탐색 고정, [정규표현식](https://docs.microsoft.com/ko-kr/dotnet/standard/base-types/regular-expression-language-quick-reference) 입력 가능 ex) ```str.search(/^[0-9]*$/)```
* ```str.includes(searchValue)``` : str이 searchValue를 포함하고 있으면 true, 아니면 false를 반환

### 나누기(split)
* ```str.split(searchValue, limit)``` : searchValue를 기준으로 나눈 배열 반환. limit는 split한 배열의 최대개수 (default=INF)
  * searchValue에 빈 문자열 ''를 넣으면 각 문자가 전부 나뉨. 
    * ex) ```'hell'.split('') == ['h','e','l','l']```

### 바꾸기
* ```let str2 = str.replace(subStr1, subStr2)``` : str의 subStr1을 subStr2로 바꾼 string 반환
  * ex) 
    ```javascript
    let str = `hell`;
    str2 = str.replace(`el`, `o`);
        str2 == `hol`;
    ```
* 특정 인덱스만 바꾸고 싶다면 : like ```str[i] = 'c'```
  * 따라서 slice를 이용한 다음과 같은 함수를 정의하여 대체 가능
    ```javascript
    function changeByIndex(str, index, addStr){
        return str.slice(0, index) + addStr + str.slice(index + 1);
    }
    ```

### 숫자만추출
* 
    ```javascript
    str = '10.5px'; 
    parseInt(str) == 10; //Math의 parseInt 참고
    parseFloat(str) == 10.5;
    ```

### 대소문자 변경
* ```str.toUpperCase()```
* ```str.toLowerCase()```


<br><br>
# 배열 - Array

### 개요
* ```let arr = new Array();``` //[1,'2',{a:''}] 등과 같이 초기화도 가능
* 배열 내 값의 자료형은 통일될 필요 x
* 배열에 함수도 넣을 수 있음

### 기본 메소드
* ```push()``` : 뒤에 삽입
* ```pop()``` : 뒤에 삭제
* ```unshift()``` : 앞에 삽입
* ```shift()``` : 앞에 삭제

### 전개구문 : 객체에도 사용 가능


### 서브배열
* ```arr.slice(startIndex, lastIndex)``` : startIndex부터 lastIndex-1까지의 배열 반환. arr은 변화 없음
* <u>```arr.splice(n, m, x)```</u> : n번부터 m개 배열 반환. <U>arr배열은 해당 배열이 삭제</U>되고 x가 추가됨
  * ex
    ```javascript
    arr = [1,2,3,4,5]; 
    arr2 = [1,2,3,4,5];
    console.log(arr.splice(1,2)); //[2,3];
    console.log(arr); //[1,4,5] 
    console.log(arr2.splice(1,3,100,200)); //[2,3,4]
    console.log(arr2); //[1,100,200,5];
    ```

### 배열추가
* ```arr.concat(arr2,arr3,...) == [<arr>,<arr2>,<arr3>,...]``` : arr은 변화 없음
* 전개구문 : 객체에도 사용 가능. 전개구문을 사용한 배열은 배열이 아닌 나열형태임
    ```javascript
    arr1 = [1,2,3];
    arr2 = [...arr1, 4,5,6]; //이 때 사용한 배열 변수 앞에 ...를 붙인 것이 전개 구문
    arr2 == [1,2,3,4,5,6];
    console.log(Math.max(arr2)); //NaN : Math.max에는 배열이 아닌 수 목록이 들어가야 함
    console.log(Math.max(...arr2)); //6
    ``` 
	
### 반복
* ```arr.forEach(function(value, index, array))``` : 배열의 for문
* ```arr.reduce(function(prev, current), initialValue)``` <br>
  initalValue를 function의 prev로 넘기고, function에서 반환된 값을 다음 function의 prev로 넘김. 최종 반환값 반환.
* ```arr.map(callbackfn[value, index, this] )``` : arr을 0부터 돌면서 fn에서 리턴한 값을 모아 새로운 <u>배열</u> 반환

### 찾기
* ```arr.indexOf(searchValue, startIndex)``` : startIndex부터 시작해 첫 searchValue의 위치 반환, 없으면 -1 반환
* ```arr.lastIndexOf(searchValue)``` : 마지막 searchValue의 위치 반환, 없으면 -1 반환
* ```arr.includes(x)``` : x를 포함하는지 true/false 반환
* ```arr.find(function(value, index))``` : function이 true를 반환한 <u>첫번째 요소</u>의 value 반환
* ```arr.findIndex(function(value, index))``` : function이 true를 반환한 <u>첫번째 요소</u>의 key 반환
  * ex
    ```javascript
    let firstEvenIndex = arr.findIndex((item)=>{
        return item % 2 === 0; //짝수이면 true라서 멈춤. 즉 첫번째 짝수의 index를 반환.
    });
    ```
* ```arr.filter(function(value, index))``` : filter는 function이 true인 모든 value를 배열 형태로 반환. <u>index 반환함수는 없으므로 주의</u>

### 정렬
* ```arr.reverse()``` : 역순으로 재정렬
* ```arr.sort(function)``` : 오름차순 정렬
  * 단, fn을 정의하지 않으면 문자열로 파싱하여 정렬함에 주의
  * `sort`의 `function`은 `return`값을 `음수,0,양수`로 구분하여 정렬
  * 따라서 숫자배열을 오름차순으로 정렬할 떈 ```return a-b;```

### 합치기 (join)
* ```arr.join(str)``` : arr의 value를 전부 하나로 합친 string 반환. 각 value 사이엔 str이 추가, str의 default=','
  * ex
    ```javascript
    arr = ['go', 'to', 'hell'];
    console.log(arr.join(' ')); //go to hell
    ```

### isArray (판단)
* ```Array.isArray(arr)``` : 배열판단
*  `Array`의 기본 자료형은 `Object`이기 때문에 배열인지 객체인지 판단하기 위해서 사용


<br><br>
# lodash

https://lodash.com/<br>
객체, 배열 등의 데이터를 다루는 라이브러리 (주로 객체가 배열에 담겨있는 데이터를 다룸)

### 사용법
npm i -g npm<br>
npm i --save lodash<br>
```javascript
import _ from lodash
```

### 메소드
* `_.uniqBy(arr, key)` : key가 중복인 항목을 제거한 배열을 반환하려면
* `_.unionBy(arr1, arr2, key)` : arr1+arr2 에서 key가 중복인 항목을 제거한 배열 반환
* `_.find(arr, searchObj)` : searchObj 조건을 만족하는 첫번째 객체 반환
* `_.findIndex(arr, searchObj)` : searchObj 조건을 만족하는 첫번째 객체의 인덱스 반환
* `_.remove(arr, searchObj)` : searchObj 조건을 만족하는 모든 객체를 삭제한 것을 반환. arr은 삭제된 후의 배열
* `_.sortBy(arr, key)` : key값을 기준으로 오름차순으로 정렬


<br><br>
# 수학

### 진법 바꾸기
* 10->n : `num.toString(n);` //2~36진수까지만 가능
* n->10 : `parseInt(str,m);` //str을 m진수로 보고 10진수로 변환한 값 반환, m의 디폴트는 10
* 
### 메소드
* `Math.ceil(a)` : 올림
* `Math.floor(a)` : 내림
* `Math.round(a)` : 반올림
* `a.toFixed(n)` : 소수점n번째까지만(뒤엔 반올림) //문자열을 반환하므로 Number로 형변환
* `Math.random()` == 0~1사이 무작위. 1~n까지 랜덤 : Math.random()*n+1
* `Math.max(array)` : 배열의 최댓값 반환
* `Math.min(array)` : 배열의 최솟값 반환
* `Math.abs(a)` : 절대값
* `Math.pow(a, b)` : a^b 반환 // 연산자 **와의 차이점은 pow는 bigInt 사용 불가


<br><br>
# 함수 - function

### 화살표 함수
* 전통 함수(function)을 간편화한 대안
* 전통 함수 대비 제한점
  * this, super에 대한 바인딩이 없음
  * 메소드로 사용할 수 없음
  * call, apply, bind 적용 불가
  * class의 생성자(constructor)로 사용 불가능
  * yield 사용 불가

### 매개변수
* arguments
  * js는 함수의 매개변수를 하나만 설정해도, 호출할 때 하나만 넣어야 한다는 제약 x
  * arguments는 array형태의 '객체'이므로 forEach, map과 같은 메소드 사용 불가
  * arguments.length, arguments[0] 과 같이 사용 가능

* ...(나머지 매개변수)
  * `function(arg1, arg2, ...restArgs)` 와 같이 사용
  * 인자의 앞에 2개는 arg1, arg2에 할당되고 나머지 인자가 있을 경우 restArgs에 할당
  * 나머지 매개변수는 <u>'배열'</u>이기 때문에 forEach, map 등 사용 가능

### call, apply, bind
* `fn.call(x, arg1, arg2, ...)` : fn에서 this로 x에 접근 가능
* `fn.apply(x, [arg1, arg2, ...])` : call과 똑같지만 매개변수를 배열로 받아서 하나씩 넘김
  * ex) `Math.max.apply(null, arr)`
* `let fn2 = fn.bind(x, arg1, arg2, ...)` : fn의 this를 x로 묶은 함수 반환

### Generator, yield
* 단계별로 실행할 수 있는 iterable 함수
* `function* f(){...}` 로 선언
* 해당 함수는 처음에 동작을 하지 않고, next() 메소드를 사용할 때마다 다음 yield를 만나기 전까지만 실행
* `next()` : 다음 `yield val`까지 함수 진행, `{value:val, done:true|false}` 객체 반환
* `return(val)` : 함수 즉시 종료, `{value:val, done:true}` 객체 반환
* `yield* fn();` 으로 다른 iterable(generator도 당연히 포함) 참조 가능
* 전개구문 `(...)` 사용 가능. ex) `console.log(...gen());`
* ex
  ```js
  function* fn(){
      console.log(1);
      yield 1;
      let x = yield "숫자를 입력하세요 : "; //a.next(val) 을 하면 x에 val이 담김
      console.log(x);
      console.log(3);
      return 1+x+3;
  }

  let a = fn();
  a;
  console.log(a.next()); // 1, {value:1, done:false}
  console.log(a.next()); // {value:"숫자를 입력하세요 : ", done:false}
  console.log(a.next(4)); // 4, 3, {value:8, done:true}
  ```



<br><br>
# 클래스 - class

```javascript
class MyClass {
    #s = ''; //변수명이 #으로 시작하면 private. #까지 변수명에 포함된다는 점에 주의 
    constructor(s) { //생성자
        this.#s = s;
    }
    set s(str) { //setter : 외부에서 선언한 MyClass 변수 a가 있을 때 a.s = 'asd'; 와 같이 작동
        this.#s = str;
    }
    get s() { //getter : console.log(a.s); 와 같은 코드에서 작동
        return this.#s;
    }
    changeByIndex(startIndex, lastIndex, newStr) {
        this.#s = this.#s.slice(0, startIndex) + newStr + this.#s.slice(lastIndex);
}
```

* prototype : 숨겨진 요소들
  * 클래스나 클래스처럼 동작하는 function에는 prototype 객체가 기본적으로 포함되어있음
  * 클래스 내의 메소드는 모두 해당 클래스의 prototype에 들어감
  * `MyClass.prototype.name = 'sim'` 과 같이 사용 가능
  * `let arr = new Array()` 라고 했을 때, arr.length 와 같은 변수나 함수를 사용할 수 있는 이유


<br><br>
# 비동기 처리

비동기 처리 과정 : 대기실 -> 큐 -> 메인스택

### 스케줄링 함수
* `setTimeout(fn, ms, arr1, arr2...)` : ms 후 fn 실행. fn의 매개변수는 ms 뒤에 오는것에 주의
* `setInterval(fn, ms, arr1, arr2...)` : ms마다 fn 반복 실행
* `clearTimeout(t)` : let t = setTimeout(fn, ms); //or interval 일 때 대기중인 t를 삭제

### Promise
* 비동기 처리 결과에 따라 다른 반응을 보여야 할 때 사용
* `let x = new Promise(function(resolve, reject){});`<br>resolve는 성공했을 때, reject는 실패했을 때 사용. 결과값을 매개변수로 넘길 수 있음
* ex
    ```javascript
    function x(){
        return new Promise(funtion(resolve, reject){
            let isComplete = false;
            ...
            if(isComplete){
                resolve(resolveResult);
            }
            else{
                reject(rejectResult);
            }
        });
    }
    x()
    .then(
        function(resolveResult){...}
    )
    .catch(
        function(rejectResult){...}
    )
    .finally( //option
        function(){...}
    );
    ```

### Promise.all
* 여러개의 promise를 동시에 실행하여 모두 성공했을 때 then
* ex
  ```javascript
  Promise.all([x(), y(), z()])
  .then(
      ...
  )
  ```

### async, await
* async는 `async function x(){}` 와 같이 사용하고, 해당 함수는 promise를 반환
* await는 async 함수 내에서 사용 가능하고, primise 함수를 기다리는데 사용
* ex
  ```javascript
  async function order(){
    let res1 = await x();
    let res2 = await y(res1);
    let res3 = await z(res2);

    or

    let res = await Promise.all([x(), y(), z()]);
  }

  order().catch((e) => console.log(e));
  ```


# 기타

### this
* 일반 함수의 this는 해당 함수를 호출하는 시점에서 동적으로 결정. call apply bind를 이용해 this 변경 가능
* 화살표 함수의 this는 상위 스코프의 this를 가리키며 정적임. call apply bind를 사용해도 this 변경 <strong>불가능</strong>
* ex
  ```typescript
  var myname = 'kim';

  const a = {
      myname: 'sim',
  }

  function f() {
      console.log(this.myname);
  }
  let af = () => console.log(this.myname);

  f(); //kim
  f.call(a); //sim
  af(); //kim
  af.call(a); //kim (화살표 함수는 this 할당 불가능)
  ```

### closure
* 함수가 실행될 때 렉시컬 환경과 함수의 조합
* 주로 현 상태를 기억하고 상태를 변경할 때 사용
* ex
  ```typescript
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
  ```