const a = new Object();
console.log(a, typeof a);

const b = new Object(true);
console.log(b, typeof b);

const c = new Object({ name : 'Mark' });
console.log(c, typeof c);



// prototype

function Person(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('Mark', 33);
consoel.log(p.toString());