# 자료형

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