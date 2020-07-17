
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


:one: 기본 변수 할당
	- foo에 one, two, three를 각각 저장한 후, 변수 one two three에 구조분해로 할당되어 출력
```
var foo = ["one", "two", "three"];

var [a, b, c] = foo;
console.log(a); // "one"
console.log(b); // "two
```
:two: 선언에서 분리한 할당 
	- 변수를 선언과 할당을 분리하여 배열 구조분해 할당
```
var a, b; 
[a, b] = [1, 2]; 
console.log(a);// 1 
console.log(b); // 2
```

:three:
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
  
  
>[생성자 함수 동작 방식]
>	>1. 빈 객체 생성 및 this를 바인딩 해준다. 
>	>  2. 생성자 함수 코드가 실행되기 전에 빈 객체가 생성된다. 
>	>  3. 이 객체가 생성자 함수가 새로 생성하는 객체이며, 이 객체는 this로 바인딩이 된다.
>	> <br>
>	> [tip!]이렇게 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 프로토타입 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정하게 된다. 

:one:생성자 함수 생성
```
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
```


:two: prototype을 통해 함수에 프로퍼티 추가 
  - 객체 생성자는 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해준다.
```
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
```

:three: 객체 생성자 상속받기
  - prototype 프로퍼티 객채 생성(참고 : https://victorydntmd.tistory.com/52)
```
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

:four: class 생성]
- 객체 생성자로 구현했던 코드를 조금 더 명확하고, 상속도 쉽게 할 수 있다. 

```
class Food{
  constructor(name){ //name을 파라미터로 받아옴
      this.name = name;
      this.brands = [];
      }
      addBrand(brand){ //method_1 (class 내부에 구현하는 함수)
          //파라미터에 brand를 받아와서 brands 배열에 push해준다.
          this.brands.push(brand)
      }
      print(){ //method_2
          console.log(`${this.name}을 파는 음식점들 : `)
          console.log(this.brands.join(', '));
          //join : 배열 안에 있는 것을 합침
      }
}


const pizza = new Food('피자');
pizza.addBrand('도미노'); //brand추가
pizza.addBrand('피자헛');

const chicken = new Food('치킨');
chicken.addBrand('네네치킨');
chicken.addBrand('BBQ');


chicken.print();
pizza.print();
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
---

#### prototype 와 class
:one: Prototype <br>
	- 객체생성자로 만들었을 때, 그것으로 만든 객체들끼리 공유할 수 있는 값이나 함수
	- 프로토타입을 기반으로 상속을 흉내내도록 구현해 사용한다. 메모리와 중복된 값이 겹치는 문제를 가볍게 만든다. 

```
// 기존 생성자 함수 
  function Person(){
            this.hand = 2;
            this.body = 1;
            this.nose = 1;
  }

  var kim = new Person();
  var lee = new Person();

  console.log(kim.hand)  //2
  console.log(lee.hand)  //2

// Person이라는 같은 데이터를 갖고 있는 kim과 lee 객체가 생성됨.
// 문제점 : 각자 3개의 속성을 갖고 있고 데이터 또한 동일 -> 메모리와 중복된 값이 겹침
// kim과 lee는 Person.prototype이라는 어떤 Object의 hand라는 속성을 공유하고 있다.
```

	- 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드를 입력하여 설정
	- 메모리 관점 : 생성된 객체의 수 만큼 변수에 저장되는 것이 아닌, 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype을 공유하고 있다.
	- Person 함수로부터 생성된 객체(kim, lee)들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.

```
// 프로토타입 객체생성자 상속하기

function Person(){}

Person.prototype.hand = 2;
Person.prototype.body = 1;
Person.prototype.nose = 1;

let kim = new Person();
let lee = new Person();

console.log(kim.hand) // 2
console.log(lee.hand) // 2
```

:two: Class<br>
	- 객체생성자와 프로토타입을 조금 더 쉽게 사용하기 위해 만들어졌다.<br>
	- 상속을 할 때는 extends 키워드로 사용하는 생성자를 확장<br>
	- constructor에서 사용하는 super() 함수는 상속받는 상위 클래스의 생성자를 가르킨다.<br>
	- 함수와 동일하게 클래스 선언식과 표현으로 클래스를 만들 수 있다.

	1) 클래스 선언 (class declarations)
	```
	class Polygon { 
		constructor(height, width) 
		{ this.height = height; this.width = width; } 
		}
	```
	2) 클래스 표현 (class expressions)
	```
	// unnamed 
	var Polygon = class { 
		constructor(height, width){ 
			this.height = height; 
			this.width = width; 
			} 
		}; 
	// named
	var Polygon = class Polygon { 
		constructor(height, width) {
			this.height = height; 
			this.width = width; 
			} 
		};
	```
- 생성자(Constructor) : 객체의 생성과 초기화를 하는 메소드, 클래스에 constructor는 하나여야한다. 
- super() : 상위 클래스의 생성자 메소드를 호출 할 수 있다. 

```
class Person{
  constructor(name, first, second ){    //new 키워드 객체가 생성되는 과정에서 먼저 실행됨
  this.name = name;
  this.first = first;
  this.second = second;
    console.log(`blblblbl`);
  }
}

const kim = new Person('kim', 10, 20);
consoel.log('kim', kim);


```

```
class Aniaml {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Aniaml { // extends로 특정 class (Aniaml)를 상속 받음
  constructor(name, sound) { //Animal안에서 사용하는 생성자를 덮어쓴다.
    super("개", name, sound); //super() 는 상위클래스의 생성자(constructor)를 호출
  }
}

const dog = new Dog("멍멍이", "멍멍멍");
console.log(dog);
```
	
