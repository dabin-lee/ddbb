
[용어]
 - 리터럴이란 ? : 변수 및 상수에 지정되는 값 자체를 일컫는다. 즉 코드상에서 데이터를 표현하는 방식 자체를 말한다.
 - 객체 리터럴 : {키: 원하는 값} // var object_ = { key : value } 변수 object_ 안에 객체리터럴을 대입
 - 생성자란? 객체를 생성할 때 항상 실행되는 것으로, 생성자(constructor)는 객체를 만드는 역할을 하는 함수다.

## 객체[object]
- 객체의 본질은 컨테이너
- key: value 구조인 프로퍼티를 하나 혹은 여러개 갖고 있다. 
- 원시타입을 제외한 모든 값이 객체가 된다. 즉, 배열도 함수도 모두 객체이다. 


#### 객체 생성 
1. 객체 리터럴
(1-1) 리터럴
  - 가장 일반적인 방법은 중괄호{ } 를 사용하여 객체를 생성하는 방법
```
var person = {
    name: "victolee",
    email: "asdf@example.com",
    birth: "0225"
}
```

(1-2) 객체 안에 함수 넣기
  - 객체 리터럴에서도 메서드(객체 프로퍼티인 함수)를 추가할 수 있다. 
```
  const o = {
    name : 'dabini', //원시값 
    bark : function(){ return `yayayaya`;} //함수 프로퍼티
  }
```

2. 생성자 함수 (객체생성자)
  - 반드시 "new" 연산자를 붙이고, 함수명 첫 글자는 대문자로 시작한다.
  - 선언적 방식 보다는 일반 익명함수를 만드는 스타일과 비슷
  - 일반 함수와 다르게 자신을 프로토타입으로 지정하고 그 객체를 리턴한다.
```
//생성자 함수 생성
function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
-// 함수의 인자로 전달받은 값을 객체에 할당하기 위해서 this 키워드를 사용했다 ★



// 객체 생성
mycar = new car("붕붕이", "소나타", 2018);
- // 2 new 키워드를 통해서 몇가지 더 정의하여 인스턴스 화 


// 또다른 생성자 함수 정의
function Person(name, age, company){
  this.name = name;
  this.age = age;
  this.company = company
}
var db = new Person("이다빈", "30", "ipartners");
var mj = new Person("김민정", "30", "ipartners");


// 차의 owner를 정의하기 위해 car 함수에 owner 추가 정의 해준다.
function car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}

carDB = new car("테슬라", "modelX", 2020, db)
carMJ = new car("벤츠", "E클래스", 2020, mj)
```




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
