
{
    //
    const name = 'name';
    console.log(name);
}


//밖에서 안으로

let age = 37;
{
    age++;
    console.log(age);
}
console.log(age);

// 중첩

{
    {
        {
            console.log(age);
        }
    }
}

//  안에서 선언된 변수는 출력이 되지 않는다. 제어문에서도 마찬가지
if(true){
    let age = 37;
    console.log(age);
}

// 출력이 되지 않음

for(let i = 0; i < 5; i++){
    const message = 'hello:' + i;
    console.log(message);
}

// 출력이 되지 않음


//  var 함수 스코프
var a = 0;
(function(){
    var b = 0;
    console.log(b);
})();
b++;
console.log(b);