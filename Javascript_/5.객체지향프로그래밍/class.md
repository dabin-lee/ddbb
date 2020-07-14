
[class문법]

- 객체생성자와 프로토타입을 조금 더 쉽게 사용하기 위해 만들어졌다.

```
class Animal{
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
        }
    say(){
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