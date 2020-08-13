

#### jquery 조작

- 제이쿼리는 DOM을 요청하거나 Ajax 요청을 할 때 널리 쓰인다.
- DOM API로도 할 수 있지만 Jqeury를 쓰는 장점
  - 브라우저 호환성
  - ajax api가 단순함
  - 내장된 DOM API를 더 유용하고 간단하게 바꾼 메소드 제공

1. Document Object Modelling : DOM 로딩 ready 준비되면 제이쿼리 사용가능
   - 제이쿼리에서는 브라우저가 페이지를 완전히 읽고 DOM을 구축한 다음에만 호출되는 콜백함수가 있다.
```
$(document).ready(function(){
console.log('제이쿼리 로딩시 웹문서 모두 읽어들이고 준비되면 제이쿼리 실행');
});
```

```
$(function(){ //제이쿼리 선언문
alert('제이쿼리실행1 테스트');
});
```

```
jQuery(function(){ //제이쿼리 선언문
alert('제이쿼리실행2 테스트');
});
```



2. 제이쿼리 표현식 기호
```
var jQ = $.noConflict();
    jQ(function(){
    alert('jQ 문자로 $ 대신 사용함.');
});
```
   - $.noConflict(); 는 $ 문자 사용 안함을 선언.
   - 다른 플러그인에서 $기호가 충돌 가능성있다.
   - $대신 다른문자나 기호를 사용가능하다.




3. 함수 선언

//함수는 명령어 또는 프로그램등이 1개이상 묶어서 실행 하는 그룹단위
- 이름있는 함수
    ```
    함수이름(); //실행
        function 함수이름(){
        명령어 (메소드) 실행문
    }
    함수이름(); //실행
    ```
- 이름없는 함수(익명함수)
    ```
    변수이름(); //함수 선언문 위에서는 실행 불가
        var 변수이름 = function(){ //익명함수
        }
    변수이름();
    ```



#### 리터럴 방식 & 객체 방식 & 익명함수


1. 리터럴 방식
```
var num = 10;
var str = "string";
var isEmpty = true;
var ArrNum = [1,2,3];

```

2. 객체 방식
```
var arryFn
    num = 10,
    str = "string",
    isEmpty = true,
    ArrNum = [1,2,3]

```

3. 익명함수
```
var num = 10;
var str = "string";
var isEmpty = true;
var ArrNum = [1,2,3];

```
