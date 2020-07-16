function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

 // 객체 생성
 mycar = new Car("붕붕이", "소나타", 2020);



 // 또다른 생성자 함수 정의
 function Person(name, age, company){
   this.name = name;
   this.age = age;
   this.company = company
 }
 var db = new Person("이다빈", "30", "ipartners");
 var mj = new Person("김민정", "30", "ipartners");


 // 차의 owner를 정의하기 위해 car 함수에 owner 추가 정의 해준다.
 function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
 }

 carDB = new Car("테슬라", "테슬라", 2020, db)
 carMJ = new Car("벤츠", "벤츠350", 2020, mj)


console.log(carDB.owner.name); //이다빈
console.log(carMJ.owner.name); //김민정