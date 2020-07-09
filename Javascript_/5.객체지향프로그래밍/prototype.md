
### propotype
- 역할 : 객체생성자로 만들었을 때, 그것으로 만든 객체들끼리 공유할 수 있는 값이나 함수

1. propotype 훑어보기
```
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  <!-- this.say = function() { //익명함수
    console.log(this.sound);
  }; -->
}

Animal.prototype.say = function(){
    console.log(this.sound);
}
Animal.prototype.sharedValue = 1;

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

dog.say();  //멍멍
cat.say();  //야옹
```

- js는 클래스라는 개념이 없기 때문에 기존의 객체를 복사하여 새로운 객체를 생성하는 propotype 기반의 언어이다.
- 이렇게 생성된 객체는 다른 객체의 원형이 될 수 있다.
- 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 특정 값을 재사용 할 수 있는데 그게 바로 프로토타입.
- 사용 예시
  ```
  function Person(){
            this.hand = 2;
            this.body = 1;
            this.nose = 1;
  }

  var kim = new Person();
  var lee = new Person();
  console.log(kim.hand)  //2
  console.log(lee.hand)  //2
  ```
  - Person이라는 함수를 통해서 kim과 lee 객체를 생성함.
  - 각자 3개의 속성을 갖고 있고 데이터 또한 동일.
  - 메모리관점에서 kim과 lee 객체가 생성되면서 6개 변수가 메모리에 저장 됨. 심지어 중복된 값임.



2. propotype을 사용하여 객체를 생성
- 프로토타입은 다음과 같이 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드를 입력하여 설정 할 수 있습니다.
```
function Person(){}
Person.propotype.hand = 2;
Person.propotype.body = 1;
Person.propotype.nose = 1;

  let kim = new Person();
  let lee = new Person();

  console.log(kim.hand)  //2
  console.log(lee.hand)  //2
```
  - 메모리 관점: kim과 lee는 자신이 변수를 가지고 있는게 아니라, Person.prototype이라는 어떤 Object의 hand라는 속성을 공유하고 있다.
  - 위의 코드 처럼 생성된 객체의 수 만큼 변수가 저장되는 것이 아니라, 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype 이라는 Object를 공유하고 있다는 뜻
  - Person.prototype이라는 빈 Object가 어딘가에 존재하고, Person 함수로부터 생성된 객체(kim, lee)들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.

3. prototype object
- js에서 함수가 정의 될 때, 기본적으로 생성자(constructor)가 부여된다.
- 생성자가 부여된 함수는 new를 통해 객체를 생성할 수 있게 된다.
- propotype object가 생성되고 object함수가 가지고 있는 prototype속성과 연결 된다.
- 출처 : https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-
- 출처 : https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67


4. prototype link
- 자바스크립트 객체는 Prototype이라는 내부 프로퍼티가 존재한다.
- 거의 모든 객체가 생성 시점에 이 프로퍼티에 null이 아닌 값이 할당된다.






1. 프로토타입의 생성
   - 프로토타입은 다음과 같이 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드
   - 프로토타입의 생성 : 가장 기본적인 방법은 객체 생성자 함수(object constructor function)를 작성하는 것
       - 생성자 함수를 작성 하고 new 연산자를 사용해서 객체를 생성하면, 같은 프로토타입을 가지는 객체들을 생성할 수 있다.
   ```
   function Dog(color, name, age) { // 개에 관한 생성자 함수를 작성함.
     this.color = color;          // 색에 관한 프로퍼티
     this.name = name;            // 이름에 관한 프로퍼티
     this.age = age;              // 나이에 관한 프로퍼티
   }

   var myDog = new Dog("흰색", "마루", 1); // 이 객체는 Dog라는 프로토타입을 가짐.
   document.write("우리 집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + " 털이 매력적인 강아지입니다.");

   //우리 집 강아지는 마루라는 이름의 흰색 털이 매력적인 강아지입니다.
   ```


2. 객체에 프로퍼티 및 메소드 추가
   - 이미 생성된 객체에 새로운 프로퍼티나 메소드를 추가하는 방법
   -  새롭게 추가된 weight 프로퍼티와 breed() 메소드는 오직 myDog 인스턴스에만 추가된다.
   ```
   function Animal(color, name, age, sound) { // 개에 관한 생성자 함수
   this.color = color;
   this.name = name;
   this.age = age;
   this.sound = sound;
   }

   const myDog = new Animal("검정색", "망고", 5, "멍멍"); // 이 객체는 Animal라는 프로토타입을 가짐.

   myDog.family = "푸들";  // 품종에 관한 프로퍼티를 추가함.
   myDog.breed = function() {   // 털색을 포함한 품종을 반환해 주는 메소드를 추가함.
   return `${this.color}의 ${this.family}`;
   };

   document.write(`우리 집 강아지는 ${myDog.breed()} 입니다.`);
   //우리 집 강아지는 검정색의 푸들 입니다.
   ```

  2-1) 인스턴스(Instance) 란?
   - 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체이다. 즉, 객체를 소프트웨어에 실체화 하면 그것을 ‘인스턴스’라고 부른다.
   - 실체화된 인스턴스는 메모리에 할당된다.
   - 참조 : https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html


3. 프로토타입과 클래스 - 객체 생성자 상속하기
   - 상속은 부모 생성자의 기능을 물려받으면서 새로운 기능도 추가하는 것을 의미합니다. (상속 대신 확장(extend)이라는 말을 쓰기도 함)
   - 상속은 단방향임.

   ```
   function Animal(type, name, sound) {
     this.type = type;
     this.name = name;
     this.sound = sound;
   }

   Animal.prototype.say = function(){
       console.log(this.sound);
   }

  // 최대한 Animal이 가지고 있는 것을 재사용 해서 dog, cat 객체생성자 생성
  // 자체적으로 type을 넣어줄 것이므로, type을 필요로 하지 않는다.

     function Dog(name, sound){
       Animal.call(this, '개', name, sound);
     }
     function Cat(name, sound){
       Animal.call(this, '고양이', name, sound);
     }

    Dog.proptotype = Animal.prototype;
    Cat.proptotype = Animal.prototype;

     const dog = new Dog("개", "멍멍이", "멍멍");
     const cat = new Animal("고양이", "야옹이", "야옹");
   ```

4. 클래스로 구현해보기
   ```
   function Animal(type, name, sound) {
     this.type = type;
     this.name = name;
     this.sound = sound;
   }

   Animal.prototype.say = function(){
       console.log(this.sound);
   }
     function Dog(name, sound){
       Animal.call(this, '개', name, sound);
     }
     function Cat(name, sound){
       Animal.call(this, '고양이', name, sound);
     }

    Dog.proptotype = Animal.prototype;
    Cat.proptotype = Animal.prototype;

     const dog = new Dog("개", "멍멍이", "멍멍");
     const cat = new Animal("고양이", "야옹이", "야옹");
   ```


#### call과 apply의 차이
call 메소드와 동일 하나, call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달합니다.


#### 클래스와 인스턴스 생성
     - instanceof : 객체가 특정 클래스에 속하는지 아닌지를 확인할 수 있습니다.
     - 상속 관계도 확인해줍니다.
     - 인수의 타입에 따라 이를 다르게 처리하는 다형적인(polymorphic) 함수 만들 수 있다.
    ```
    class Rabbit {}
    let rabbit = new Rabbit();

    // rabbit이 클래스 Rabbit의 객체인가요?
    alert( rabbit instanceof Rabbit ); // true
    ```
      - instanceof는 생성자 함수에서도 사용할 수 있습니다.
