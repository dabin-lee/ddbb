function rand(m, n){
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace(){
    return["crown","anchor","heart","spade","club","diamond"]
    [rand(0,5)];
}


let funds = 50;
let round = 0;


while(funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
}