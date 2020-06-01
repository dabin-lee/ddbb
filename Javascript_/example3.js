// 함수먼저

function hello1(){
    console.log('hello1');
}

hello1();

// 함수 호출 먼저
hello2();

function hello2(){
    console.log('hello2');
}

// 아래있는 선언만(을) 끌어올리는 현상을 호이스팅이라고 한다. - hoisting

age = 5;

var age;

// 선언만 올라가는 것