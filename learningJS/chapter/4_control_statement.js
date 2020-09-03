

/*

시작
100펜스를 따거나 50 펜스를 전부 잃거나 => 돈을건다 -> 주사위를 굴린다. -> 그림을 맞추면 돈을가져오고 -> 재시작
=> 끝
*/


// [while문]
    // 조건을 만족하는 동안 코드를 계속 반복
        let funds = 50; //시작조건
        while(funds > 1 && funds < 100){
            // 돈을건다
            // 주사위를 굴린다.
            // 맞추었으면 돈을 가져온다.
        }


// [보조함수]
    // m 이상 n이하의 무작위 정수를 반환
    function rand(m, n){
        return m + Math.floor((n - m + 1)*Math.random());
    }

    // 여섯가지 도형 중 하나를 무작위 반환
    function randFace(){
        return ["crown", "anchor", "heart", "spade", "club", "diamond"]
            [rand(0, 5)]
    }

// [if~ else 문]
    // 돈을 거는 행동 만들기
    const bet = {
        crown :0,
        anchor :0,
        heart :0,
        spade :0,
        club :0,
        diamond:0 };
    let totalBet = rand(1, funds);


    if( totalBet === 7 ){
        totalBet = funds;
        bets.heart = totalBet;
    }else{
        funds = funds - totalBet;
    }

// [do ~ while 문]
let remaining = totalBet;
do{
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
}while (remaining > 0);


// [for문]
const hand = [];
for(let roll = 0; roll < 3; roll++){
    hand.push(randFace());
}



// [if문]
let winnings = 0;
for(let die = 0; die < hand.length; die++){
    let face = hand[die];
    if(bet[face] > 0){
        winnings = winnings + bets[face];
    }
    funds = funds + winnings;
}



/*

랜덤 정수를 만들 때 가장 만ㅇ히 보이는 소스
Math.floor(Math.random()*10);

소수점 이하를 반올림한다

*/



// 합치기

function rand(m, n){
    return m + Math.floor((n -m + 1)*Math.random());
}