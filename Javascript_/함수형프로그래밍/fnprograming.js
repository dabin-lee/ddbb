// 순수함수
function add(a, b){
    return a + b; //부수효과가 없음 - 외부에 영향을 미치지 않는다.
}
console.log(add(10, 5)); //15
//동일한 인자에는 동일한 결과 리턴


//순수함수가 아닌 예제2 ) 동일한 인자이지만 상황에 따라 다른 결과를 return하는 함수
var c = 10;  //c값이 상수로 존재하게 된다면 순수함수로 볼 수 있다.
function add2(a, b){
    return a + b + c;
}

console.log(add2 (10, 2)); //22
console.log(add2 (10, 3)); //23
c = 20;
//인자는 동일하지만 똑같은 add2함수가 다른결과를 내놓는다. => 순수함수가 아니다.
console.log(add2 (10, 2)); //32
console.log(add2 (10, 3)); //33



//순수함수가 아닌 예제3 ) 인자의 상태를 직접 변경은 데이터를 다룰 때 객체를 주로 다루게 되는데 객체 상태 변경 불가
var c = 20;
function add3(a, b){
    c = b;
    return a + b;
}
// return값 외에 다른 방식으로 외부에 직접관여 중 (c = b) => 부수효과가 있기에 순수함수가 아니다.

console.log('c :', c); //c : 20
console.log(add3 (20, 30)); //50
console.log('c :', c); //c : 30

//순수함수가 아닌 예제4 ) 부수효과는 있지만 순수함수는 아니다.
var obj1 = { val : 10 };
function add4(obj1, b){
    obj1.val += b;  // obj1 두번째 인자로 들어온 값에 val을 더 함
}
// return도 없고 인자로 들어온 값의 상태를 직접 변경.

console.log(obj1.val); //10
add4(obj1, 20);
console.log(obj1.val); //30 obj1의 value값이 변경 됨.


// 다시 순수함수
var obj1 = { val : 10 };
function add5(obj, b){
    return { val: obj.val + b};
}
// return값 외에 다른 방식으로 외부에 직접관여 중 (c = b) => 부수효과가 있기에 순수함수가 아니다.
add5(obj1, 30);




// 일급 함수
