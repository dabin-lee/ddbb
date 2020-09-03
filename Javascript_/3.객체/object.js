

const dabin = { name : 'dabin', age : 4}; //object만들기
const ob2 = new Object(); //

function print(person){ //출력하고 싶은 함수 2가지 파라미터
    console.log(person.name);
    console.log(person.age);
}
print(dabin); // 함수안에 dabin을 전달받음
console.log(dabin['name']); //key should be always string


const person1 = {name : 'bob', age : 2};
const person2 = {name : 'dave', age : 5};
const person3 = makePerson('elile', 30);

console.log(person3);

function makePerson (name, age){ //함수에 오브젝트
    return {
        name,
        age
    };





}