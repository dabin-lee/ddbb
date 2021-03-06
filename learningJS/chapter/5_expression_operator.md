- 기본타입 (primitive values) : 원시값
- Boolean
- Null
- Undefined
- String
- Symbol (ECMAScript6 에 추가됨)
- Object


### 이스케이프 시퀀스
- 문자나 키보드에서 직접 입력할 수 없는 문자를 표현하기 위한 방법
- 줄 바꿈 문자, 탭 문자 등은 문자열에 그대로 추가할 수 없다.
- \ (역슬래시) 를 이용해서 특정 제어 코드나 문자를 표현 할 수 있다.
- 예시
```
"i'm going to learn javascript."
"i\'m going to learn javascript."
    - 종류
    - \b : 백스페이스
    - \t : tab
    - \n : 개행
    - \f : 페이지 열기
    - \r : 복귀
    - \' : 작은 따옴표, \" : 큰 따옴표
    - \\ : \문자
    - \0 : \ NULL문자
```

### 비교연산자

```
const n = 5;
const s ="5";

n === s //false 타입이 다름
n !== s //true
n === Number(s) // true 문자열 5를 숫자 5로 변환
n !== Number(s) //false
n == s //true; 권장하지 않음
n != s //false; 권장하지 않음
```

```
const a = {name : "an object"};
const b= {name : "an object"};

a === b; //flase 객체는 항상 다르다.
a !== b; //ture
a == b; // false; 권장하지 않음
a != b; // true; 권장하지 않음
```
- 연산자 =
    - a값과 b값이 같으면 true, 그 외에는 false

### 논리연산자
- 불리언 값으로만 다루며 false와 ture 두가지 뿐
- 불리언이 아닌 값도 다룰 수 있고 , 불리언이 아닌 값을 반환하기도 한다.
- 논리 연산자를 불리언 값에 사용하면 결과는 불리언 값 뿐

    [true / false]
    - 0 : flase
    - 1 : 다른 숫자 모두 ture이다.
    - 참 같은 값, 거짓 같은 값

    [불리언으로 변환]
        - '참 같은 값' , '거짓 같은 값'
        - 부정 (not)연산자 (!) 를 써서 모든 값을 불리언으로 바꿀 수 있다.
        - '참 같은 값' : false로 바뀐다.
        - __부정 연산자를 한번 더 쓰면 true__ 를 얻을 수 있다.

    :star2:[참 같은 값과 거짓 같은 값]:star2:
    - js에서는 모든 데이터 타입을 참 같은 값과 거짓 같은 값으로 나눌 수 있다.
    - 거짓 같은 값 list (이 외에는 모두 참 같은 값)
        - undefined
        - null
        - false
        - 0
        - NaN
        - ''{빈 문자열)
    - 참 같은 값 list (염두해야 할 몇가지)
        - 모든 객체
        - valueOf() method 를 호출 했을 때 false를 반환하는 객체도 참 같은 값에 속한다.
        - 배열, 빈 배열
            - 빈 배열 arr이 거짓 같은 값으로 평가되길 원한다면 arr.length를 사용 <br>
            (빈 배열에서 이 프로퍼티를 호출하면 0을 반환하고 이는 __거짓 같은 값__ 이다.)
        - 공백만 있는 문자열("")등
        - 문자열 "false"


   ### turethy / falsy
   https://nangko.tistory.com/15


   ### 논리 부정 연산자
   - "!" 연산기호로 긍정을 부정으로 부정을 긍정으로 바꿀 수 있는 연산자이다.
   - 조건 문과 반복 문의 조건식에서 사용되고 조건식을 조금 더 효율적으로 만들 수 있다.

   ```
   ture //true
   !ture //false
   false // false
   !fasle // ture
   ```

   trace(attr);
   attr = !attr; => ture를

   ```
