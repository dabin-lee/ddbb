

### Prototype vs Class
- 클래스(Class)라는 것을 한 번쯤은 들어보셨을겁니다.<br>
Java, Python, Ruby등 객체지향언어에서 빠질 수 없는 개념이죠.<br>
그런데 중요한 점은 자바스크립트도 객체지향언어라는 것입니다. 이게 왜 중요하냐구요? 자바스크립트에는 클래스라는 개념이 없거든요.<br>
대신 프로토타입(Prototype)이라는 것이 존재합니다. 자바스크립트가 프로토타입 기반 언어라고 불리는 이유이죠.<br>
클래스가 없으니 기본적으로 상속기능도 없습니다. 그래서 보통 프로토타입을 기반으로 상속을 흉내내도록 구현해 사용합니다.<br>
참고로 최근의 ECMA6 표준에서는 Class 문법이 추가되었습니다.<br>
하지만 문법이 추가되었다는 것이지, 자바스크립트가 클래스 기반으로 바뀌었다는 것은 아닙니다.


- 자바스크립트에 클래스는 없지만 함수(function)와 new를 통해 클래스를 비스무리하게 흉내낼 수 있습니다. <br>
프로토타입은 다음과 같이 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드를 입력하여 설정 할 수 있습니다. <br>
(거의 모든 객체가 생성시점에 이 프로퍼티에 null이 아닌 값이 할당됩니다.)

- 객체생성자로 객체를 만들었을때 만들어진 객체들끼리 공유할 수 있는 어떤 값이나 함수


## 객체생성자 상속하기

#### prototype 와 class
- Prototype : 객체생성자로 만들었을 때, 그것으로 만든 객체들끼리 공유할 수 있는 값이나 함수
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
- 메모리 관점 : 생성된 객체의 수 만큼 변수에 저장되는 것이 아닌, 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype을 공유하고 있다.  <br>
Person 함수로부터 생성된 객체(kim, lee)들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.

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
[Prototype Object]
1. 해당 함수에 Constructor(생성자) 자격 부여
 - constructor 자격이 부여되면 new를 통해서 객체를 만들어 낼 수 있게 된다. - 이것이 함수만 new 키워드를 사용할 수 있는 이유이다.

2. prototype object 접근
 - 생성된 함수는 prototype이라는 속성을 통해서 prototype object에 접근 할 수 있다.
 - 기본적인 속성으로 constructor와 __proto__ 를 가지고 있다.

- Prototype Object는 일반적인 객체이므로 속성을 마음대로 추가/삭제 할 수 있다.
- 참고 : https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67



### javascript에서 객체를 만드는 방법
  - 1. var objectLiteral = {}; //1
  - 2. var objectContructor = new Object(); //2
     - 첫 번째 Literal 방법은 객체를 만들어내는 단축어? 숏컷이고, 두 번째 생성자를 이용한 방법이다.
<br> 기본적으로 두 방법 모두 Object 생성자의 프로토타입을 상속 받아 생성되었다.

```
function Person(){
    this.hand = 2;
    this.body = 1;
    this.noes = 1;
}

var kim = new Person();
var lee = new Person();
```



- class와 instance 의 차이점



### Prototype Object


### function
- 입력, 할일, 출력 3가지로 구성됨.



