// new Object

const a = new Object();

console.log(a, typeof a); // {} object

const b = new Object(true);

console.log(b, typeof b) // [Boolean: true] object

const c = new Object({name : 'Mark'}); //리터럴을 넣음

console.log(c, typeof c) //c라는 객체는 리터럴이 그대로 출력됨



// propotype 체인

function Person(name, age){ //person이라는 생성자 함수 생성
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('Mark', 32); //hello Mark 32
p.hello(); // { name: 'Mark' } object

console.log(p.toString()); //[object Object]
console.log(Person.prototype); // Person{}
console.log(Person.constructor); //함수자체를 의미함

//