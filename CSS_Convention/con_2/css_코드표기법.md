# CSS_코드표기법

## 네이밍 케이스
1. 케밥 케이스 (kebab Case)
    - 하이픈으로 단어를 연결하는 표기법
    - HTML태그의 id, class속성으로 흔히 사용 됨.
    -  중간에 Dash(-) 들이 케밥을 꽂는 꼬치 같아서 kebab case 라고 한답니다.
    - ex) kebab-case, spinal-case, Train-Case, Lisp-case
    - 용도: CSS의 class명, WEB URL

2. 스네이크 케이스 (Snake Case)
    - 여러 단어로 이루어진 경우 단어 사이를 언더바로 나누는 방식
    - 주로 변수 명 등에 사용되는 경우가 많다.
    - ex) snake_case, background_color, type_name
    - 용도: DataBase의 Table명과 Column명

3. 헝가리언 표기법 (hungarian notation)
    - 데이터타입을 접두어로 명시하는 방법
    - 변수 및 함수의 이름을 정하는 규칙
    - ex) int(i), float(f), char(ch), sz(NULL), boolean(b)

4. 카멜 케이스 (Camel Case) - 단봉낙타 표기법 (Lower Camel Case)<br>
    ![LowerCamel_img](./img/20200403_165452.png)
    - 낙타 등이 들쑥날쑥한 것처럼 표기
    - 첫 문자를 소문자로 표기하고, 그 다음 문자부터는 대문자로 표기
    - ex) camelCase, camelValueList, lowerCamelCase
    - 용도: 프로그래밍 변수명 권장

5. 파스칼 표기법 (pascal) - 쌍봉낙타 표기법 (Upper Camel Case)<br>
    ![UpperCamel_img](./img/20200403_165534.png)
    - 첫 단어를 대문자로 시작하는 표기법
    - 첫 문자를 대문자로 표기하고, 그 다음 문자도 대문자로 표기하는 표기법.
    - 연 달아 오는 단어의 모든 앞 글자를 대문자로 지정할 수 있습니다
    - ex) PascalCase, BackgroundColor, TypeName, PowerPoint
    - 용도 : OOP프로그래밍 Class명, 함수와 클래스명에 권장

## 네이밍 표기법 지켜야 하나?
```
상황마다 어떤 형식(표기법)을 사용할지는 일반화되어 있다.

- Class명은 PascalCase
- 변수명은 LowerCamelCase
- DB의 Table명과 Column명은 PotholeCase

물론 이를 절대적인 법칙이라고는 말씀 드리지 않겠다.
강력하게 지킬것을 권한다고 말씀드리고 싶다.
혹시나 혼자서만 만드는 프로그램이라면 누가 간섭하겠냐만,

스스로도 특정 Rule이 있어야 유지보수가 수월할 것이고
Open된 Source이거나 특정 그룹이 다루는 Source일 경우 여러사람이 거쳐 갈 것이다.
누군가는 당신이 만든 코드를 보고 파악을 해야 하는 순간이 있을 것이다.
혹시나 자신의 소유의 Source가 아니라면 암묵적 Rule에 따라주는 것이 다른 이들을 위한 매너이자 배려일 것이다.

출처 : https://forgiveall.tistory.com/563 [하하하하하]
```


# CSS_방법론

##