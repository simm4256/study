# types

### 기본 자료형 붙이기
* `let myStr:string;` 과 같이 선언
* string, number, boolean, null, undefined, array, enum
* tuple : `let a:[number, string]` 과 같이 선언
* 배열은 보통 `let myArr:number[]` 과 같이 선언

### type
* `type myType = 'A' | 'B' | 'C"` 과 같이 선언

### inteface
* object, function, class(class Bmw implements Car) type 정의
* ex
    ```typescript
    interface User{
        readonly index : number; //읽기만 가능
        name : string;
        age : number;
        birthYear? : number; //없어도 됨
        [key:number]:string; //여러 키 허용
    }
    ```
* interface의 상속도 가능 (extends)

### function
* 매개변수에 변수 타입을 적어야 함
* `?` 태그를 매개변수 뒤에 붙일 수 있음. 단, 이 경우 해당 매개변수는 마지막에 와야 함
* 함수의 반환형을 정할 수 있음. `function f():number{}` 와 같은 형태로 사용
* 매개변수로 나머지 매개변수(`...`) 사용 가능
* `overloading` : 매개변수의 타입이 다를 때 같은 이름으로 선언 가능
  * ex
  ```typescript
    function sum(a: number, b: number): number;
    function sum(a: number, b: string): number;
    function sum(a: string, b: number): number;
    function sum(a: string, b: string): number;
    function sum(a: number | string, b: number | string): number {
        if (typeof a === 'string')
            a = Number(a);
        if (typeof b === 'string')
            b = Number(b);
        return a + b;
    }

    console.log(sum(1, '2'));
    console.log(sum('-12', 13));
  ```

### Literal Types
* 특정 값만 가질 수 있는 타입 정의 가능
* const로 선언 시 기본이 리터럴 타입

### Generic
* 타입을 유동적으로 받을 수 있는 방법<br>
  ex
    ```ts
    function sum<T>(arr: T[]): Number {
        let res = 0;
        arr.forEach((value) => {
            if (!isNaN(Number(value)))
                res += Number(value);
        })
        return res;
    }

    console.log(sum([1, '2', '-1', { a: 1 }])); // 2
    ```
* 제네릭도 상속이 가능<br>
  ex
    ```ts
    const user = {name:'a', age:10};
    const car = {name:'b', color:'blue'};
    const book = {price:20000};

    function showName<T extends {name:string}>(obj:T){
        console.log(obj.name);
    }

    showName(user); //a
    showName(car); //b
    showName(book); //error : book에는 name:string 이 없음
    ```

### keyof
* interface의 key를 union 형태로 반환<br>
    ex
    ```ts
    interface User {
        name: string;
        age: number;
    }

    type UserKey = keyof User; // 'name' | 'age'
    ```

### 유틸리티 타입 : <a href="https://typescript-kr.github.io/pages/utility-types.html">링크</a>
* Partital<T> : T의 key들에 ?를 붙여주는 효과를 가짐
    ex
    ```ts
    interface User{
        id:number;
        name:string;
        pw:string;
        age:number;
    }
    
    const admin: Partial<User> = {
        id:1,
        pw:'asd',
    }
    ```
* Required<T> : Partital과 반대로 모든 key들이 필수가 됨
* Readonly<T> : T 내의 모든 값들이 readonly가 됨
* Record<K, T> : 키값과 밸류값의 타입을 지정
    ex
    ```ts
    interface Names{
        1:'Sim';
        2:'Kim';
        3:'Lee';
    }

    const subNames: Record<keyof Names, string> = {
        1:'Park'
    }
    ```
* Pick<T, K> : T 내의 특정 K들을 가져와 쓸 수 있음
    ex
    ```ts
    const admin: Pick<User, "id" & "pw"> = {
        id:0,
        pw:'asd'
    }
    ```
* Omit<T, K> : T 내에서 K들을 제외한 나머지
* Exclude<T1, T2> : T1에서 T2를 제외한 나머지. Omit과의 차이점은 T2에 타입을 사용
* NonNullable<T> : T 내에서 null을 제외한 나머지

<br><br>
# Class

### 접근제한자 : js와 다르게 클래스 멤버에 접근 제한자 사용 가능
* public : 어디서든 접근 가능
* private (=`#`) : 해당 클래스에서만 접근 가능
* protected : 자식 클래스까지 접근 가능
* static : 정적 멤버, 모든 클래스 객체가 공유하며 호출할 땐 클래스명.멤버명 으로 호출
* readonly

### 추상클래스
* 클래스 앞에 `abstract` 키워드 붙여 사용. 인스턴스 생성 불가. 상속만 가능
* ex
  ```ts
  abstract class Car{
      number:Number;
      constructor(number:Number){
          this.number = number;
      }
  }
  class Bmw extends Car{
      constructor(number:Number){
          super(number);
      }
  }

  let a = new Car(); //error : 추상클래스는 인스턴스 생성 불가
  ```