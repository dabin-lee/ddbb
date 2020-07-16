
[용어]
  - 리터럴이란 ? : 변수 및 상수에 지정되는 값 자체를 일컫는다. 즉 코드상에서 데이터를 표현하는 방식 자체를 말한다.
    - 객체 리터럴 : {키: 원하는 값} // var object_ = { key : value } 변수 object_ 안에 객체리터럴을 대입
    
  - 생성자란? 객체를 생성할 때 항상 실행되는 것으로, 생성자(constructor)는 객체를 만드는 역할을 하는 함수다.


## 객체[object]

#### 객체 생성 
1. 객체 리터럴
2. 생성자 함수



#### 비구조화 할당 (= 구조 분해 할당 = 해체 할당)
  - 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 자바스크립트 표현식
  - 기존의 변수에서 어떤 값을 분해해 할당 할지를 정의해준다.
  - 데이터를 하나씩 가져와서 처리해야 되는 상황을 한 번에 처리 할 수 있는 간편함
  
__객체 구조분해__
- 보통 변수를 객체 리터럴을 선언하고 그 값을 추출해서 변수 혹은 상수에 바로 선언할 수 있다. 
 
```
const myDog = {
    name : '망고',
    age : 5,
    sound : '멍멍'
};
const {name, age, sound} = myDog;
console.log(name); //망고
console.log(age); //5
- 1. 분해된 객체를 선언된 변수에 할당


const { x: name, y: age } = myPat; 
console.log(x); //망고
console.log(y); //5
- 2. 객체 분해 / 객체의 속성명과는 전혀 다른 이름의 변수에 할당 할 수 있다. 
```


__배열 구조 분해__
- 기본 변수 할당
```
var foo = ["one", "two", "three"];

var [a, b, c] = foo;
console.log(a); // "one"
console.log(b); // "two
```

- 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용할 경우 
```
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
```

__3. 매게변수 해체__
- 함수의 파라미터에서도  비구조화 당을 할 수 있다. 
```
function getGogo({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const print = {
  subject: "I",
  verb: "love",
  object: "javascript"
};

console.log(getGogo(print));
```

```
const obj = { a : 1 };
function print({ a, b = 2 }){
    console.log(a);
    console.log(b);
}
print(obj); // 1 2
```


#### 그 외 함수 정의법
1. 리터럴 함수
2. 생성자 함수
3. 즉시실행함수 
4. 콜백함수


#### class와 prototype
