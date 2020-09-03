
function rand(m, n){ //m이상 n이하 무작위 정수 반환 함수
    return m + Math.floor((n - m + 1)*Math.random());
}

 // 여섯가지 도형 중 하나를 무작위 반환
function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

let funds = 50; //시작조건
let round = 0;

while(funds > 1 && funds < 100){
    round++;
    // console.log(`round ${round} : `);
    // console.log(`tstarting funds ${funds}p`);

    // 돈을 건다.
    let bets = {
        crown :0,
        anchor :0,
        heart :0,
        spade :0,
        club :0,
        diamond:0 };
    let totalBet = rand(1, funds);

    console.log(totalBet);

    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    }else{
        let remaining = totalBet;

    }
}