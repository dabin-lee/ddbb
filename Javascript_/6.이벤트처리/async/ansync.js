
/*
비동기
promise is javascript object for asynchronous operation.
state : pending -> fulfilled or rejected
producer vs consumer
*/

// 1.producer
// 우리가 원하는 기능을 비동기적으로 만듬 - promise/ resolve

const promise = new Promise((resolve, reject) =>{
    // promise는 클래스 이기 때문에 new키워드를 통해서 object를 생성 할 수 있다.
    // 이 콜백 함수는 executor(실행문)을 전달해줘야 한다.
    // 1. 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 resolve 콜백 함수 /
    // 2. 기능을 수행 중 오류가 발생하면 호출하게 되는 reject


    // doing some heavy work(파일 읽기, 네트워크에서 데이터 받아오기) -> 비동기적 처리
    console.log('doing something');
    setTimeout(() => {
        //resolve('ellie'); //성공적 기능 호출
        reject(new Error('no network')); //실패이유
        // reject는 보통 Error Object를 통해서 값을 전달한다.
    }, 2000);
});

// 2. consumer - producer 된 promise를 이용해보자 : then, catch, finally를 이용해서 값을 받아온다.

// 1_1 resolve - then (성공)
promise.then(value => {
        // promise변수로 then(값이 정상적으로 잘 수행이 된다면)((value)=> value값을 받아올 것임)
        // 여기서 (value)값은 성공적으로 기능 호출이 된 resolve콜백함수 값이 들어온다.
        console.log(value);
        //ellie : 프로미스가 정상적으로 잘 수행이 되어서 마지막에 최종적으로 reslove 콜백 함수 값이 value의 파라미터로 전달 되어 진 것
})
// reject - catch
.catch(error => { //리턴된 프로미스에 케치를 등록 (실패)
    console.log('error 발생');
})//에러가 발생했을 때 처리 방법을 콜백 함수

//finally()
.finally(()=>{
    console.log('finally');
}); //성공 실패 유무 상관 없이 어떠한 기능을 마지막으로 수행 하고 싶을 때 finally를 사용한다.
//출력됨 아무런 인자를 받지 않고



/*
promise는 만드는 순간 executor 콜백 함수가 자동으로 실행 되는 점을 유의 하기
*/

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(() =>resolve(1), 1000);
});

// then은 값을 바로 전달해도 되고 promise를 바로 전달해도 된다.

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then (num => console.log(num));


// promise를 chaining했을 때 에러 처리 방법?

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
});
const getegg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000); //닭을 받아서 달걀을 얻어옴
});
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 프라이`), 1000); //받아온 달걀로 요리함
});

getHen()
// .then(hen => getegg(hen)) //닭이 받아와 지면 전달받은 닭을 이용해서 getegg함수 이용
// .then(egg => cook(egg))
// .then(meal => console.log(meal)) // 요리된 음식


// 한가지만 받아서 전달하는 경우는 생략이 가능
getHen()
.then(getegg)
.catch(error =>{ //달걀을 받아올 때 문제가 생긴다면 바로 다음문에 catch작성으로 바로바로 문제 해결
    return 'bread';
})
.then(cook)
.then(console.log);