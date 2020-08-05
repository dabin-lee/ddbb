//async 와 await

// promise를 간결하고 간편하고, 동기적으로 보이도록 도와줌
// promise chaining을 더
/*

async & await -> 조금 더 간편한 API를 제공
clear style of using promise
-
*/

// promise Object [callback함수를 준비 후 데이터가 들어오면 콜백해준다.]
function fetchUser(){
    return new Promise((resolve,reject) => { //콜백함수를 받는 executor (resolve,reject)
        // 사용자 데이터 받아옴
        resolve('ellie');
        // promise문 안에는 반드시 resolve, reject를 해줘야 한다.
        // return 'ellie'; resolve, reject를 호출하지 않고 바로 return하게 되면 promisestate = pending
    });
}
/*
*/


// const user = fetchUser(); //함수 호출 -> 블럭문으로 가서 실행 (동기적) //결국 promise를 리턴해주는것임
user.then(console.log); //then으로 (user가 들어오면 콘솔로 출력)
//console.log(user); //-> 'ellie'가 user에 할당이 됨



// async
/*
 1. function앞에 async
 2. promise를 쓰지 않아도 됨 - 자동적으로 코드안 블럭들이 promise로 변환이 된다.
 */

async function fetchUser() {
    return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//await
async function getApple(){
    await delay(1000); //딜레이가 끝날때까지 await이 기다려줌
    return "apple";
  }

  async function getBanana(){
    await delay(1000); //딜레이가 끝날때까지 await이 기다려줌
    return "banana";
  }

//   async function pickFruits() {
//     //   병렬적 기능수행 - > 복잡한 코드
//       const applePromise = getApple();
//       const BananaPromise = getBanana();
//       const apple = await applePromise;
//       const banana = await BananaPromise;
//       return `${apple} + ${banana}`;
//   }
//   pickFruits().then(console.log);



// promise all
function pickAllFruits(){
        return Promise.all([getApple(), getbanana()])
        // getapple과 getbanana의 promise를 전달
        .then(fruits => fruits.join(' + ')
        );
    }
    pickAllFruits().then(console.log);
    }

// promise.race [배열에 전달된 프로미스 중에서 가장 먼저 값을 리턴한 애만 전달 됨]
function pickOnlyOnce(){
    return Promise.race([getApple(), getbanana()])
}
pickOnlyOnce().then(console.log);
//바나나출력