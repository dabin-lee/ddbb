// 함수의 매개변수안에는 함수의 body안에서 사용할 이름을 정해줌

function hello1(name){
    console.log('hello1', name);
}
console.log(hello1, typeof hello1);


// 함수의 리턴
// 함수를 실행하면 얻어지는 값

function hello3(name){
    return `hello3 ${name}`;
}

// 받아서 출력
// hello3 의 인자로 name이란 것을 호출
// 그렇게 hello3 함수를


const hello2 = function(){
    console.log('hello2');
}
console.log(hello2, typeof hello2);