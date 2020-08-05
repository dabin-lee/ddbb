/*
async
javascript is cychronous. 동기적이다.addAppbar
execute the code block bty orger (in order) after hoisting. //호이스팅 순서에 맞춰서
hoisting : var function declaration
*/



console.log('1');
setTimeout(() => console.log('2'),1000);//지정시간이 지나면 callback함수 호출 //browser API

console.log('3');
console.log('4');

// 2. 동기적 콜백

// callback을 파라미터 인자로 받아서 이를 처리하는 함수 생성
function printImmediately(print){ //print라는 콜백함수를 전달 받음
    print();
}
printImmediately(()=> console.log('hello'));
//함수 호출
// 함수의 선언은 호이스팅이 되기 때문에 위로 올라가게 된다.



// 2. 비동기적 콜백 => 브라우저api 호이스팅 됨
function printWithDelay(print, timeout){ //ms로 인자를 2개 받아옴
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);


// 3. callback hell
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password == 'dream') ||
                (id === 'coder' && password == 'academy')
            ){
                onSuccess
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user == 'ellie'){
                onSuccess({name : 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}


const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password == prompt ('enter your password');
// UserStorage.loginUser(id, password, (user) => {
//    id,
//    password,
//    user => {
//        UserStorage.getRoles(user, (userWithRole)=> {

//        })
//    }
// });



/*
비동기
promise is javascript object for asynchronous operation.
state : pending -> fulfilled or rejected
producer vs consumer
*/

// 1.producer
// 우리가 원하는 기능을 비동기적으로 만듬 - promise
const promise = new Promise(resolve, reject) =>{
    // promise는 클래스 이기 때문에 new키워드를 통해서 object를 생성 할 수 있다.
    // 이 콜백 함수는 executor(실행문)을 전달해줘야 한다.
    // 1. 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 resolve 콜백 함수 /
    // 2. 기능을 수행 중 오류가 발생하면 호출하게 되는 reject


    // doing some heavy work(파일 읽기, 네트워크에서 데이터 받아오기) -> 비동기적 처리
    console.log('doing something');
    setTimeout(() => {
        resolve('ellie'); //성공적 기능 호출
    }, 2000);
}

// 2. consumer - producer 된 promise를 이용해보자 : then, catch, finally를 이용해서 값을 받아온다.
promise.then(value) => {
        // promise변수로 then(값이 정상적으로 잘 수행이 된다면)((value)=> value값을 받아올 것임)
        // 여기서 (value)값은 성공적으로 기능 호출이 된 resolve콜백함수 값이 들어온다.
        console.log(value);
});

/*
promise는 만드는 순간 executor 콜백 함수가 자동으로 실행 되는 점을 유의 하기

*/