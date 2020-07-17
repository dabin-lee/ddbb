
[용어]
 - 리터럴이란 ? : 변수 및 상수에 지정되는 값 자체를 일컫는다. 즉 코드상에서 데이터를 표현하는 방식 자체를 말한다.
 - 객체 리터럴 : {키: 원하는 값} // var object_ = { key : value } 변수 object_ 안에 객체리터럴을 대입
 - 생성자란? 객체를 생성할 때 항상 실행되는 것으로, 생성자(constructor)는 객체를 만드는 역할을 하는 함수다.

## 객체[object]
- 객체의 본질은 컨테이너
- key: value 구조인 프로퍼티를 하나 혹은 여러개 갖고 있다. 
- 원시타입을 제외한 모든 값이 객체가 된다. 즉, 배열도 함수도 모두 객체이다. 


---

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
- 배열을 해체할당하는 경우 변수명에 관계없이 순서에따라 할당
- 참고 : https://beomy.tistory.com/18


- 1) 기본 변수 할당
 - foo에 one, two, three를 각각 저장한 후, 변수 one two three에 구조분해로 할당되어 출력
```
var foo = ["one", "two", "three"];

var [a, b, c] = foo;
console.log(a); // "one"
console.log(b); // "two
```
- 2) 선언에서 분리한 할당 
 - 변수를 선언과 할당을 분리하여 배열 구조분해 할당
```
var a, b; 
[a, b] = [1, 2]; 
console.log(a);// 1 
console.log(b); // 2
```

- 3) 
```
var array = [1, 2, 3];
var a = array[0];
var b = array[array.length - 1];
console.log(a); // 1
console.log(b); // 3
```

__3. 매게변수 해체__
- 함수의 파라미터에서도  비구조화 당을 할 수 있다. 
```

const print = {
  subject: "I",
  verb: "love",
  object: "javascript"
};
// 객체를 매개변수로 넘겨주고 해체 할당

function getGogo({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
// 객체를 인수로 받아 리턴하는 함수

console.log(getGogo(print)); // I love javascript
```

```
const obj = { a : 1 };
function print({ a, b = 2 }){
    console.log(a);
    console.log(b);
}
print(obj); // 1 2
```
 
 ---


#### 객체 생성 
1. 객체 리터럴
(1-1) 리터럴
  - 가장 일반적인 방법은 중괄호{ } 를 사용하여 객체를 생성하는 방법
  - 중괄호 내 아무것도 적지 않으면 빈 객체가 생성
  - 프로퍼티가 함수일 경우 해당 프로퍼티를 메소드라고 부른다.
```
var person = {
    name: "victolee",
    email: "asdf@example.com",
    birth: "0225"
    func : function() { // 함수
        return null;
    }
}
```
- 이렇게 생성한 프로퍼티의 값들은 해당 객체에 접근하여 다른 값을 대입하고 사용할 수 있다.
```
//접근방법1
person.name = "victolee";
person.email = "asdf@example.com";

//접근방법2 : 배열 처럼 대괄호 안에 프로퍼티를 적어서 접근
person[name] = "victolee";
person[email] = "asdf@example.com";
```

(1-2) 객체 안에 함수 넣기
  - 객체 리터럴에서도 메서드(객체 프로퍼티인 함수)를 추가할 수 있다. 
  - 함수를 객체에 담고 있는 프로퍼티를 메서드라고 부른다 
```
  const o = {
    name : 'dabini', //원시값 
    bark : function(){ return `yayayaya`;} //메서드
  }
```

2. Object() 생성자 함수
 - new 키워드를 이용하여 Object 생성자 함수를 호출하면 비어있는 객체를 생성한다.
 - new Object()로 빈 객체를 먼저 대입하고 생성된 객체에 프로퍼티를 추가해준다.
 - 최근엔 쓰지 않음
```
var person = new Object();

person.name = "victolee"
person.email = "asdf@example.com
person.bith = "0224";
```

3. 생성자 함수 (객체생성자)
  - 반드시 "new" 연산자를 붙이고, 관례적으로 함수명 첫 글자는 대문자로 시작한다.
  - 선언적 방식 보다는 일반 익명함수를 만드는 스타일과 비슷
  - 일반 함수와 다르게 자신을 프로토타입으로 지정하고 그 객체를 리턴한다.
  
  
  [생성자 함수 동작 방식]
  1. 빈 객체 생성 및 this를 바인딩 해준다. 
  2. 생성자 함수 코드가 실행되기 전에 빈 객체가 생성된다. 
  3. 이 객체가 생성자 함수가 새로 생성하는 객체이며, 이 객체는 this로 바인딩이 된다.
 <br>
 [tip!]이렇게 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 프로토타입 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정하게 된다. 
  
```
//1. 생성자 함수 생성
function Car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
 - 인스턴스를 생성. 
 - 인자로 전달받은 값을 객체에 할당하기 위해서 this 키워드를 사용했다 ★

var mycar = new Car("붕붕이", "소나타", 2018);
  - 객체 생성
  - Car함수를 new 키워드를 통해 호출하면 Car()는 생성자 함수로 동작



//2. prototype을 통해 함수에 프로퍼티 추가 
  - 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해준다.

function Mycar(make, model, year, sound) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.sound = sound;
}

Mycar.prototype.say = function() {
  console.log(this.sound);
};

var DB = new Mycar("테슬라", "modelX", 2020, "부릉부릉");
var MJ = new Mycar("벤츠", "E클래스", 2020, "빵빵");

DB.say(); //부릉부릉
MJ.say(); //빵빵


// 3. 객체 생성자 상속받기
  - prototype 프로퍼티 객채 생성(참고 : https://victorydntmd.tistory.com/52)

let foo = function(){
 this.name = "dabin"
 this.email = "dblee@ipartner.co.kr"
}
  - 생성자 함수를 만들어준다. 

let foo = function(){}
foo.prototype.name = "dabin"
foo.prototype.email = "dblee@ipartner.co.kr"

let fooObj = new foo();
  - 프로토타입을 통해 생성자 함수로 생성된 객체 모두에 프로퍼티, 메서드 공유 
```

---


#### 그 외 함수 정의법
1. 함수 선언식 (Function Statement)
- 함수 선언 방식은 함수 리터럴 형식과 같다.
- 함수 선언문은 반드시 함수 이름이 명시되어 있어야 한다.
- 함수 이름으로 함수를 호출한다. ex) greet();
```
greet();
// 함수 선언
function greet(){
	console.log('hi');
}
```
2. 함수 표현식 (Function Expressions
- 함수 리터럴로 생성한 함수를 변수에 할당
- 자바스크립트에서 표현식이란, 값을 반환하는 식 또는 코드이다.
- function은 익명함수이고 함수 변수인 변수명을 통해 호출
```
sayHi(); // 'hi'
sayHello() ; // sayHello is not a function

var hi ='hi';
function sayHi(){ console.log('hi') }
var sayHello = function(){ console.log('hello') };
```

__결론, 함수 표현식은 호이스팅이 되지 않고 함수 선언으로 선언된 함수는 호이스팅 된다. 즉 함수가 정의되기 전에 함수를 호출할 수 있다.__

3. Function 생성자를 이용한 방법


#### class와 prototype
