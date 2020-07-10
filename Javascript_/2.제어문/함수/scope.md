## Scope

1. global(전역) - 코드의 모든 범위에서 사용 가능
2. function(변수) - 특정 함수 내부에서만 사용 가능
3. Block(블록) - 중괄호로 감싸진 (if, for, switch 등) 특정 블록 내부에서만 사용 가능


```
const value = 'hello'; // -  Global Scope

function Myfunciton(){ //  -  function Scope
  console.log('Myfunciton : ');
  console.log(value);  // block scope
}

function otherFuntion(){ //  -  function Scope
  console.log('otherFunction : ');
  const value = 'bye';
  console.log(value); // bock scope => bye출력
}

Myfunciton();
otherFuntion();

console.log(`global scope : `);
console.log(value) //global scope => hello출력
```

11. 스트릭트 모드(strict mode)
    - 사용 이유?
      - var변수를 선언하지 않으면 전역 변수를 참조하려 한다고 간주하고, 그런 전역 변수가 존재하지 않으면 스스로 만들었다. 이런 이유로 수많은 에러가 발생
    - 일반적으로는 전역 스코프에서 스트릭트 모드를 사용하지 않는 편이 좋다.
    - 코드 전체를 즉시 실행되는 함수 하나로 감싸면 된다.
    - "use strict" 를 스크립트 최상단에 위치 -> __현대적인__ 방법으로 동작. , 그 외의 경우에는 활성화 되지 않음.
        ```
        "use strict";

        // this code works the modern way
        ...
        ```
    - 사용법 : https://poiemaweb.com/js-strict-mode

4. 전역 스코프
  - 피해야 하는 것은 전역 스코프에 의존하는 것이다.
    ```
    [피해야 하는 예문]
    let name = "irena", //전역
        age = 24; //전역

      function greet(){
        console.log(`hello, ${name}!`);
      }
      function getBirthday(){
        retrun new Date().getFullYear() - age;
      }
    ```
    - 함수가 호출하는 컨텍스트(스코프)에 대단히 의존적이기에 문제가 된다.
    - name과 age는 흔한 이름이므로 다른 이유로 사용할 가능성도 높다.
    - greet와 getBirthday는 전역 변수에 의존하기에

  - 사용자 정보를 단일 객체에 보관하는 방법이 더 낫다
    ```
    [단일 객체로 보관]
    let user = {
      name = "Irena"
      age = 35,
    }

    function greet(){
      console.log(`hello, ${name}!`);
    }
    function getBirthday(){
      retrun new Date().getFullYear() - age;
    }
    ```
    - name, age를 없애고 대신 user를 써서 식별자를 줄였지만 정보가 100가지 이상 보관이 되어 진다면 다시 개선해야한다.

  - 전역 스코프에 의존하지 않게 만들어보기
  ```
  function greet(user){
    console.log(`hello, ${user.name}!`);
  }
  function getBirthday(user){
    retrun new Date().getFullYear() - user.age;
  }
  ```
  - 모든 스코프에서 호출할 수 있고, 명시적으로 user를 전달받는다.

