
<!-- 비구조화 할당 destructuring assignment -->

## array -

```
const animalList = ["CAT", "DOG", "TIGER"];
const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

👇👇👇👇👇👇👇👇👇👇

const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat); //CAT
console.log(dog); //DOG
console.log(tiger); //TIGER

```

## 변수와 상수

- 변수 (let)
    - 변수 - 바뀔 수 있는 값
    - 선언 후에 값을 바꿀 수 있다.
    - 단, 변수의 이름은 한번 선언 후 같은 이름으로 선언 불가
    ```
    let value = 1;
    console.log(value);
    // 1

    let value = 2;
    console.log(value);
    // 2
    ```

- 상수 (const)
    - 상수 - 변하지 않음을 확신할 수 있는 변수
    - 한번 값을 설정하고 나면 바꾸질 못함. -> 값이 고정 적
    ```
    const a = 1;
    a = 2;
    // Error : "a" is read-only (a는 읽기전용)

    const a = 1;
    const a = 2;
    // "a" has already been declared
    ```


## block scope
- block-scoped 란 {} (블록) 내부에서 선언된 변수와 상수는 {} 밖에서는 영향을 주지 않는다.
- let과 const로 선언된 변수는 block scope를 갖게 된다.
- Block scope 는 중괄호 ({ }) 를 기준으로 유효범위를 갖는다.

### var (ES5)
```
function foo() {
  if (true) {
    var a = 'bar';
  }

  console.log(a);
}

foo();
// bar
```
- 변수 a 는 foo 함수에서 전역으로 영향력을 갖게 된다. 그렇기 때문에 if 문의 scope 안에서 선언된 변수도 밖에서 접근이 가능.


### let (ES6)
```
function foo() {
  if (true) {
    let a = 'bar';
  }

  console.log(a);
}

foo();
// Uncaught ReferenceError: a is not defined
```

- let은 선언한 변수 if문의 scope 내에서만 유효하기 때문에 해당 scope 밖에서 a 에 접근할때, 오류가 발생한다.

## 데이터 타입

__숫자 (Number)__
- 숫자는 그냥 바로 값을 대입
```
let value = 1;
```

__문자열 (String)__
- 작은 따옴표 혹은 큰 따옴표로 감싸서 선언
```
let text = 'hello';
let name = '좌봐스크립트';
```

__참/거짓 (Boolean)__
- 참은 true, 거짓은 false.
```
let good = true;
let loading = false;
```

__null 과 undefined__
-  null 은 없다고 고의적으로 설정하는 값을 의미하고, undefined 는 우리가 설정을 하지 않았기 때문에 없는 값을 의미
```
const friend = null;
//null

let criminal;
console.log(criminal);
//undefined
```
