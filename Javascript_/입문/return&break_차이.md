[JavaScript에서 return과 break의 차이]

1. return
return은 함수 실행을 종료하고, 함수를 빠져 나온다.


2. break
break는 현재 루프 즉, switch나 for, while문 등을 종료하고 루프에서 빠져나온다.


3. return과 break의 차이
만약에 함수 안에 작성된 루프 안에서 break가 쓰였다면, break를 감싸고 있는 루프를 빠져나가고 함수 밖으로는 나가지 않는다.
return은 함수 실행을 종료하고 함수를 호출한 곳으로 실행 흐름을 옮긴다.
