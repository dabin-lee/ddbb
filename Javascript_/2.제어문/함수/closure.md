변수를 은닉하여 지속성을 보장하는 등 다양한 기능 구현 가능.

자바스크립트의 함수와, 함수가 선언될 때의 environment로 구성


```
function makeCountFn(initVal){
    var count = initVal; //1. count에 변수에 인자로 받은 값을 저장
    function Increase(){ //2. Increase함수선언
      count++;
      console.log(count);
    }
    return Increase;//3. Increase함수반환
}

        //4. 함수 2번 호출
        //conter1,2 함수에 increase함수가 저장이 됨
var counter1 = makeCountFn(0);
var counter2 = makeCountFn(10);

//5. 함수 호출
counter1();
counter2();

//1
//11

함수 밖에서는 count변수에 접근할 수 없음.

```

[makeCounterFunction(0);]
- closure가 가리키는 함수
  - function Increase(){}
- closure의 enviorment
  - var count = 0;


[makeCounterFunction(10);]
- closure가 가리키는 함수
  - function Increase(){}
- closure의 enviorment
  - var count = 10;

```
클로저는 1급객체 함수 개념을 이용하여 스코프에 묶인 변수를 바인딩 하기 위한 일종의 기술이다.
함수를 저장한 recod이며, scope의 인수(factor)들은 클로저가 만들어 질 때 정의(define)되며,
스코프 내의 영역이 소멸(remove)되었어도 그에 대한 접근(access)는 독립된 복사본인 클로저를 통해 이루어 질 수 있다.
```

