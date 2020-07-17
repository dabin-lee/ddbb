
[class문법]

- 객체생성자와 프로토타입을 조금 더 쉽게 사용하기 위해 만들어졌다.
- 상속을 할 때는 extends 키워드를 사용
- constructor:  객체가 만들어 지기 전 객체의 초기상태를 위한 약속되어 있는 함수  (class안에서 메소드를 만들 때)
    - js는 객체를 생성할 때 constructor함수를 자동으로 실행한다 .
- constructor에서 사용하는 super() 함수가 상속받은 클래스의 생성자를 가르킨다.

```
class Animal{
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
        }
    say(){ //메서드
    console.log(this.sound);
    }
}


class Dog extends Animal{
    // extends는 특정 class를 상속받는 다는 의미

    constructor(name, sound){
        //기존 Animal안에서 사용하는 constructor를 덮어 씀.
        //name과 sound 파라미터를 가져온다.caption
        super('개', name, sound);
        //자신이 상속받을 클래스(Animal)의 constructor을 호출함
    }
}

class Cat extends Animal{

    constructor(name, sound){
        super('고양이', name, sound);
    }
}


const dog = new Dog('멍멍이', '멍멍멍멍멍멍');
const cat = new Cat('고양이', '야옹야옹야옹' );
const cat2 = new Cat('단디', '꺄꺄꺄' );

dog.say();
cat.say();
cat2.say();
```



```
class Food{
    constructor(name){ //name을 파라미터로 받아옴
        this.name = name;
        this.brands = [];
        }
        addBrand(brand){
            //class 내부에 구현하는 함수는 method라고 한다.
            //파라미터에 brand를 받아와서 brands 배열에 push해준다.
            this.brands.push(brand)
        }
        print(){
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




인스턴스(instance) -
- oop관점에서 객체가 메모리에 할당되어 실제 사용될 때를 일컫는다.
- 추상적 관점에서 구체적인 객체 사이의 관계에 초점일 때 '~의 인스턴스' 형태로 사용
    - 객체는 클래스의 인스턴스이다.
    - 객체 간의 링크는 클래스 간의 연관 관계의 인스턴스다.
    - 실행 프로세스는 프로그램의 인스턴스다.


- 같은 클래스에 속하는 개개의 객체로, 하나의 클래스에서 생성된 객체를 말한다.
- 즉 클래스가 구체화되어, 클래스에서 정의된 속성과 성질을 가진 실제적인 객체로 표현된 것을 의미한다.
- 이때 추상적인 개념인 클래스에서 실제 객체를 생성하는 것을 인스턴스화(instantiation)라고 한다.

추상화 기법
분류(Classification)
객체 -> 클래스
실재하는 객체들을 공통적인 속성을 공유하는 범부 또는 추상적인 개념으로 묶는 것
인스턴스화(Instantiation)
클래스 -> 인스턴스
분류의 반대 개념. 범주나 개념으로부터 실재하는 객체를 만드는 과정
구체적으로 클래스 내의 객체에 대해 특정한 변형을 정의하고, 이름을 붙인 다음, 그것을 물리적인 어떤 장소에 위치시키는 등의 작업을 통해 인스턴스를 만드는 것을 말한다.
‘예시(Exemplification)’라고도 부른다.
https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html


### 클래스, 객체, 인스턴스의 차이

- 클래스(Class) VS 객체(Object)
  - 클래스는 ‘설계도’, 객체는 ‘설계도로 구현한 모든 대상’을 의미한다. 설계도로 구현된 집을 인스턴스라고 한다.
- 객체(Object) VS 인스턴스(Instance)
  - 클래스의 타입으로 선언되었을 때 객체라고 부르고, 그 객체가 메모리에 할당되어 실제 사용될 때 인스턴스라고 부른다.


