
[용어]
  - 리터럴이란 ? : 변수 및 상수에 지정되는 값 자체를 일컫는다. 즉 코드상에서 데이터를 표현하는 방식 자체를 말한다.
    - 객체 리터럴 : {키: 원하는 값} // var object_ = { key : value } 변수 object_ 안에 객체리터럴을 대입
    
  - 생성자란? 객체를 생성할 때 항상 실행되는 것으로, 생성자(constructor)는 객체를 만드는 역할을 하는 함수다.


## 객체[object]



#### 비구조화 할당 (= 구조 분해 할당)
  - 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 자바스크립트 표현식
  - 기존의 변수에서 어떤 값을 분해해 할당 할지를 정의해준다.
  - 데이터를 하나씩 가져와서 처리해야 되는 상황을 한 번에 처리 할 수 있는 간편함
  
__1. 객체 구조분해__
```
const object = {a : 1, b : 2};
const {a, b} = object;

console.log (a) //1
console.log (b) //2
```



__2. 배열 구조 분해__
```
// 기본 변수 할당
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

```
// 선언에서 분리한 할당
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```
```
// 기본값
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

__3. 매게변수 해체__
```
function getGogo({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
  subject: "I",
  verb: "hate",
  object: "javascript"
};

console.log(getGogo(o));
```

```
const obj = { a : 1 };
function print({ a, b = 2 }){
    console.log(a);
    console.log(b);
}
print(obj); // 1 2
```
