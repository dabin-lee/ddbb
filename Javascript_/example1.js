// 이름이 hello1인 함수를 선언
function hello1(){
    console.log('hello1');
}
console.log(hello1, typeof hello1);



// 매개변수 -> name
// 함수를 호출할 때 값을 지정
function hello2(name){ //함수의 body안에서 사용할 이름
    console.log('hello2', name);
}
// hello2를 호출할 때 name의 값을 받아옴



// 함수의 리턴
// 함수를 실행하면 얻어지는 값

function hello3(name){
    return `hello3 ${name}`;
    // name에 어떠한 값을 넣어서 호출을 하면, 함수가 호출 된 결과를 return시킴
}
console.log(hello3('mark')); // 출력결과: hello3 mark



`function 과 익명 함수를 만들어 변수에 할당`

function hello1(){
    console.log('hello1');
}

hellol;