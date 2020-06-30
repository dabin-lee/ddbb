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