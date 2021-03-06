

### [변수, 상수, 리터럴]
```
우리에게 익숙한 형태인 숫자와 텍스트, 날짜 등을 데이터 타입(data type)이라고 부른다.
변수와 상수, 리터럴은 자바스크립트가 데이터를 보관하는 메커니즘이다.
(mechanism : 사물의 작용 원리나 구조)
```

#### 3-1. 변수(variable) 와 상수
    - Variable(변수) - 변수는 값을 담기 위해 이름을 붙인 상자이다. 변수라는 이름이 암시하듯 값은 언제든 바뀔 수 있다.
    -  일반적인 프로그램은 변수 값을 알고리즘에 따라 변화시켜서 프로그램이 의도한 목적을 달성한다.
        ```
        var sum;
        ```
    - 변수 이름을 이용해서 변수 값을 읽거나 쓸 수 있다.
    - 자바스크립트에는 변수 타입이 없으므로 변수 선언자는 var 하나 뿐이다.
    - var sum, a; 쉼표를 사용하면 여러 개를 한 개의 문장으로 선언 할 수 있다.
    - 변수는 초기값을 꼭 지정해야 하는 것은 아니지만, 할당하지 않으면 undefined가 할당된다.

    - constant(상수)
    - ES6에서 새로 생겼다. 상수도 변수와 마찬가지로 값을 할당 받을 수 있지만, 한 번 할당한 값을 바꿀 수 없다.
    - 상수는 원시 값에서만 사용하지 않고, 객체 선언에서도 사용한다.
    - 상수는 대문자와 _ 스네이크바를 따르는게 암묵적 규칙인덧 하다.
        ```
        const MAX_COUNT = 10;
        const ANIMATION_SLIDE_TIME = 500;
        // 더이상 변경할 수 없는 고정값이 됨.
        ```

#### 3-2. "변수와 상수를 왜 우선 순위를 구분하는지에 대한 이해" - 다시
    - 될 수 있으면 변수보다 상수를 써야한다. (ES6 변수 : let / 상수 : const)
    - 데이터 값이 아무 때나 바뀌는 것 보다는 고정 된 값이 이해하기가 쉽기 때문이다.
    - 우선적으로 상수를 먼저 생각한 후, 상수의 목적에 안 어울린다고 파악된다면, 언제든지 변수로 바꾸면 된다.


#### 3.3 바람직한 식별자 이름
    - 변수와 상수, 함수 이름을 식별자(identifier)라 부른다.
    - 식별자에는 ($), (_), 숫자, 글자만 쓸 수 있다.
    - 예약어는 식별자로 쓸 수 없다.
    - 제이쿼리의 경우 달러($) 기호 자체를 식별자로 사용한다.
    - 대표적 표기법 : 카멜 케이스 / 스네이크 케이스
        - 참고 : ddbb/CSS_metodologia/css_case_type.md
    - 변수명은 간결하고, 명확해야 한다. 변수가 담고있는 것이 무엇인지 잘 설명할 수 있어야 한다.
        ```
        * userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.
        * 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.
        * 최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.
        * 자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.
        ```


#### 3.4 리터럴(literal)이란? / 리터럴과 식별자(Identifier)의 차이 이해
    - 리터럴 : 코드상에서 데이터를 표현하는 방식 자체
    - 값이 필요한 곳에는 어디든 리터럴을 쓸 수 있다.
        ```
        let room1 = "conference__room__a";
        // room1변수에 문자열 리터럴 값을 할당 했을 때,room1은 변수를 가르키는 식별자
        // conference__room_a는 문자열 리터럴인 동시 room1의 값

        let currentRoom = room1;
        // currentRoom 의 값은 room1변수의 값과 같음

        currentRoom = conference__room__a;
        // Error: conference__room__a is not defined
        // conference__room__a라는 식별자는 존재하지 않음.
        ```

---

### [데이터타입]

#### 3.5 원시타입과 객체
    - javascript의 값은 원시(primitive) 값 또 는 객체(object)이다.
    - 기본 데이터 타입  :  원시타입 (primitive values) 6가지
      - 원시값은 자바스크립트에서 사용할 수 있는 데이터 및 정보의 가장 단순한 형태
      ```
      Number
      Boolean
      Null
      Undefined
      String
      Symbol (ECMAScript6 에 추가됨)
      ```

    - 참조 데이터 타입 : 객체타입 - 원시타입을 제외한 모든 값
      ```
      Array
      Date
      Function
      RegExp(정규식) 등
      ```

#### 3.6 숫자
    - 모든 숫자는 배정도 부동소수점 숫자(더블)이다.

#### 3.7 문자열
    - 문자열 리터럴에는 작은따옴표, 큰따옴표, 백틱을 사용한다.
    - 백틱은 ES6 템플릿 문자열에서 사용한다.
    - 이스케이프
      - 텍스트 데이터를 사용할 때는 항상 텍스트 데이터와 프로그램 자체를 구별할 방법이 필요하다.<br> 문자열을 따옴표로 감싸는데, 감싸진 문자열 안에 따옴표가 들어가야 한다면 이스케이프를 사용한다.
      - 문자열 주위에 쓰는 부호가 아님을 나타내야한다.
      - 역슬래시는 자기 자신을 이스케이프 할 수 있다.
        ```
        const dialog = "Sam looked up and said "don't do that!" to Max." // error

        const dialog1 = "He looked up and said \"don't do that!"\ to Max."
        const dialog1 = 'He looked up and said "don\t do that!" to Max.

        const s = "In Javascript, use \\ as an escape character in strings."
        ```

#### 3.8 특수문자
    - 역슬래시는 이스케이프에만 쓰이는게 아니라 줄바꿈 문자처럼 화면에

| 이스케이프 시퀀스 |       문자      | ASCII |        영문        | ex                                   |
|:-----------------:|:---------------:|:-----:|:------------------:|--------------------------------------|
| \b                | 백스페이스      | 8     | Backspace          |                                      |
| \t                | 수평 탭(Ctrl-I) | 9     | Tab                | "speed: \t60kph"                     |
| \n                | 줄 바꿈         | 10    | Newline, Line feed | "Line1\nLine2"                       |
| \f                | 용지 공급       | 12    | Form feed          |                                      |
| \r                | 캐리지 리턴     | 13    | Carriage return    | "windows line 1 \r\n Windows line 2" |
| \"                | 이중따옴표      | 34    | Duble quotation    | 'Sam saide \"hi"\'                   |
| \'                | 단일따옴표      | 39    | Single quotation   | "Dont\'t"                            |
| \\                | 역슬래시        | 92    | Back slash         |                                      |


    - 1) 템플릿 문자 : 문자열 병합을 통해 변수나 상수를 문자열 안에 쓸 수 있다.
      - 문자열 템플릿 : 큰 따옴표, 작은따옴표 쓰지 않고 백틱을 사용한다.
      - 문자열 템플릿 안에 달러 기호를 써야 한다면 역슬래시로 이스케이프 하면 된다.
    - 2) 여러 줄 문자열 : 여러 행에 나눠 써야 할 때는 문자열 병합을 사용한다.
      - 여러줄 문자열 병합 사용할 때는 따옴표와 백틱을 썩어서 사용해도 된다.
    - 3) 숫자와 문자열 (연산자 공부)
        ```
        const result1 = 3 + '30'; // 3이 문자열로 바뀌어서 결과는 문자열 '330'
        const result2 = 3 * '30'; // 30이 숫자로 바뀌어서 결과는 숫자 90
        ```

#### 3.9 불리언
    - 불리언은 ""(따옴표)안에 넣지 않도록 한다.
      - 문자열 "false" 는 true
    - 조건문 등에서 참 같은 값, 거짓 같은 값으로 사용된다.
#### 3.10 심볼
    - 심볼은 항상 유일하다. (객체는 모두 유일한 점과 유사함)
    - `Symbol()` 생성자로 만든다. ((ex) const RED = Symbol("sunset"); )
#### 3.11 Null & undefined
    - 변수를 선언하고 값을 할당하지 않으면 기본적으로 undefined가 할당 된다.
    - 변수의 값을 아직 모르거나 적용할 수 없는 경우에는 대부분 null을 사용하는 것을 추천
#### 3.12 객체
    - 객체 리터럴 문법에서는 객체를 만드는 동시에 프로퍼티를 만들 수 있다.
    - 변수는 항상 같은 객체를 가리키고 있고, 바뀌는 것은 객체의 프로퍼티이다.
    - 객체 안에 객체, 함수 도 담을 수도 있다.
#### 3.13 Number, String, Boolean 객체
    -
#### 3.14 배열
    - 배열은 항상 순서가 있고, 키는 순차적인 숫자이다.
    - 배열 크기는 고정되지 않는다. 언제든 요소를 추가하거나 제거할 수 있다.
    - 배열 요소는 0부터 시작한다.
    - 요소의 데이터 타입을 가리지 않는다. (여러가지 타입으로 다 가능)

#### 3.15 자바스크립트 객체 표기법(JSON)
    - 배열과 객체 리터럴의 마지막에 쉼표를 허용하지 않는다.

---

### [특수 객체 타입]
#### 3.16 날짜
    - JS의 날짜와 시간은 내장된 Date 객체에서 담당한다.
#### 3.17 정규표현식 :
    - 문자열을 처리하는 방법 중의 하나로 특정한 조건의 문자를 '검색'하거나 '치환'하는 과정을 매우 간편하게 처리 할 수 있도록 하는 수단
#### 3.18 맵과 셋
    - map은 객체와 마찬가지로 키와 값을 연결
    - set은 배열과 비슷하지만 중복이 허용 되지 않는다.
    - WeakMap, Weakset은 맵,셋과 마찬가지로 동작하지만, 특정 상황에서 성능이 더 높아지도록 일부 기능을 제거한 버전이다.
#### 3.19 데이터 타입 변환 :
    - 1) 숫자로 바꾸기
      - 숫자로 바꿀 수 없는 문자열은 NaN이 반환된다.
        ```
        var numStr = "33.3";
        const num = Number(numStr);
        ```
      -  숫자로 바꿀 수 없는 문자열은 NaN반환
      - 내장 함수 parseInt , parseFloat 함수 사용
      -  Date 객체를 숫자로 바꿀 때는 valueOf() 사용

    - 2) 문자열로 변환
      - toString()
    - 3) 불리언으로 변환
      - '참 같은 값' 과 '거짓 같은 값'
      - 부정연산자(!)를 써서 모든 값을 불리언으로 바꾼다.
        ```
        const n = 0; //거짓같은 값
        const b1 = !!n; //flase
        const b2 = Boolean(n); // false
        ```


---


#### [헷갈리는 부분]
1. argument(전달인자) vs parameter(매개변수)
  - 전달인자는 함수를 __호출 할 때__ 전달되는 실제 값을 의미한다. 말그대로 "전달"하는 인자로 "값"을 의미한다.
  - 매개변수는 함수의 정의부분에 __나열되어 있는 변수들__ 을 의미한다. 전달된 인자를 받아들이는 변수.
    ```
    # argument (전달인자)
    - 전달인자에는 값이 존재한다.
        sum ( a: 10, b: 20)
    ```

    ```
    # parameter (매개변수)
    - 함수를 정의 할 때 외부로부터 받아들이는 임의의 값을 의미
    - a와 b는 실제 값이 존재하지 않고 형태를 나타낼 줄 뿐이다.
        function sum (a : int, b: int){
            return a + b;
        }
    ```

2. null과 undefined 차이점
    - 각각의 사용되는 목적과 장소를 판단
    - 대입한 적이 없는 변수 / 명시적인 '없음' 을 구분해야 코드가 명확해 진다.
    - [null]
      - 변수를 선언하고 빈 값을 할당한 경우 (-ex: array, object-의 빈 값)
      - 명시적인 부재를 나타내고 싶을 때 - 보통 어떠한 값도 담고 있지 않다는 의미로 사용됨.
      - null은 불리언문맥에서 사용시 false로 변환

    - [undefined]
      - 변수를 선언만 하고 값을 할당하지 않음. (자료형이 결정되지 않은 상태)
      - 존재하지않는 객체 프로퍼티에 접근하려고 하면 undefined 반환
      - '객체 없음'을 나타내는 것 null 반환
        ```
        var a;    //a가 선언은 되었으나 값이 할당된 적이 없음
        document.writeln(a);       //undefined
        ```

3. 참조형(Reference Type) 과 원시형 (Primitive Type)
    - 원시형
       - 원시 값을 복사/ 전달 할 떄는 값 자체를 복사 / 전달 한다. <br>
         따라서 '원본'의 값이 바뀌더라도 '사본'의 값이 바뀌지 않는다.
         - 이러한 특성은 복합 객체(=참조타입)와 대조된다.
           ```
           var name = "dabin"
           var nameCopy = name;
           var name = null;

           console.log(name, nameCopy); // null, dabin
        ```
    - 참조형
      - 변수에는 데이터에 대한 참조만 저장된다.
      - 참조 타입 종류 : Object ( array, function, object )
      - 객체를 복사 / 전달 할 때는 객체가 아니라 그 객체가 가리키고 있는 사실(참조)를 복사 / 전달한다.
        - 원본이 바뀌면 사본도 같이 바뀐다.
        - :boom: 객체를 가리키는 변수는 그 객체를 가리키고 있을 뿐, 객체 자체가 아니기에 변수와 객체는 결코 일치 하지 않는다.
        - :boom: 참조를 전달하므로 함수 안에서 객체를 변경하면 함수 외부에서도 바뀐다.
          ```
          var x = {count: 100};    // 참조 타입 선언
          var y = x;
          x.count = 99;

          y.count;    // 99, 'x'와 'y'는 동일한 참조를 담고 있으며, 따라서 동일한 객체를 가리킴

          ```

    - @정리@
        - 원시 타입은 우리가 워드 파일의 복사본을 만드는 것처럼 해당 값을 복사하여 서로 독립된 값을 가지며
        - 참조 타입은 동기화된 파일을 수정하는 것처럼, 해당 주소를 참조하여서 메모리에 저장된 것을 갖고와 참조한 값이랑 바뀌면 자동으로 바뀌게 된다.


4. 숫자와 문자열
- + 연산자 => 덧셈과 문자열 병합에 모두 사용 된다.
    - 덧셈과 병합은 모두 왼쪽에서 오른쪽으로 평가한다.
    - 왼쪽에서 오른쪽으로 두 피연산자를 평가
    - 피연산자 중 하나라도 문자열이면 문자열 병합을 수행
    - 두 값이 모두 숫자형이면 덧셈
    ```
    3 + 5 + "8" // 문자열 "88"
    "3" + 5 + 8 // 문자열 "358"
    ```
      - 첫번째 행 : 3 + 5덧셈먼저 판단 -> 8 + "8" 문자열 병합
      - 두번째 행 : "3" + 5 병합이라고 판단, "35" + 8 역시 병합으로 판단


5. 참으로 판단되는 값(truthy)과 거짓으로 판단되는 값(falsy)
    - boolean 데이터 타입 외에도 조건문이나 반복문에서 boolean값이 필요한 곳에 true와 flase로 변환되어 반환 되는 값
    - 거짓으로 판단되는 값이 아니면 모두 참으로 판단이 된다.
    - #### 거짓 같은 값 (flasy) -  불리언 문맥에서 false로 평가되는 값
      - undefined - 원시값
      - null - 아무런 값도 없음
      - false - 키워드 false
      - 0 - 숫자 zero
      - NaN - 숫자가 아님
      - `""` - 빈 문자열
    - #### 참 같은 값 (truthy) -  문맥에서 true로 평가되는 값
      - 0보다 큰 숫자
      -  모든 객체 ( `valueOf()`메서드 호출 시 false를 반환하는 객체도 참 )
      -  배열
      -  공백만 있는 문자열 `(" ")`
      -  문자열 "false"
      - function () {}과 같은 빈 함수

6. and(&&) or(||)
```
let cat = 0 || "meow";
console.log(cat); //meow

let dog = 0 && "bark";
console.log(dog); //0
```

- 0 은 거짓으로 판단되고 or 연산자
- dog :
  - 0은 이미 거짓 // flase
  - and로 묶여있어서 항상 거짓
  - 결국 0은 dog에 할당 됨.


1. 속성 접근연산자
   - 점 또는 괄호 표기법으로 객체의 속성에 접근할 수 있도록 해준다.
   - 객체 외부에서 객체 내부에 있는 프로퍼티와 메서드에 접근하기 위해서는 접근연산자를 사용해야 한다.
    ```
    object.property
    object['property']
    ```
   - 점 표기법 : 프로퍼티 이름에 (.)
     - .property는 유효한 식별자여야 한다. (식별자는 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열)
   - 괄호표기법 : `[]` 로 프로퍼티 이름을 감싼다.
     - 문자열, Symbol을 사용 할 수 있다.
     - 유효한 식별자가 아닐 때 사용한다.
     - 공백도 사용 할 수 있다.
---


#### [질문사항]
- 변수명 / 러닝js에서는 변수나 상수명에 스네이크바 형태는 지양하고 대문자로 시작해서는 안된다.
- 라고 써있는데 블로깅에서 const에서는 대문자 사용 or _ 를 암묵적 규칙으로 사용하고 있다고





#### [용어정리]

- 어떤 문제를 해결하기 위한 절차, 방법, 명령어들의 집합. 알고리즘(algorithm)


