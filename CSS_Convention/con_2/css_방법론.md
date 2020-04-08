# CSS_방법론
방법론을 사용하는 이유 ? 재사용가능하고 유지보수를 잘 할수 있는 목적이 중요하다.

## 1. OOCSS(Object Oriented CSS)
- OOCSS는 구조와 스타일을 분리한다.
- 중복되는 디자인 요소를 따로 빼내어 반복적으로 사용한다. (공통 스타일 추상화)
- 컨테이너와 콘텐츠를 분리하고 위치에 의존적인 스타일을 정의하지 않는다.
- 코드 재사용성이 높아져 코드량이 줄고 성능이 향상되며 유지보수성도 높아지는 장점이 있다.
- 반면, 마크업에서 동일한 클래스를 여러 곳에 사용하므로 코드가 지저분해지는 단점이 있다.
   <br> (다중 클래스 사용으로 유지보수의 어려움과 가독성이 떨어질수 있다.)
- 이 단점을 보완한 것이 OOSass로, 마크업의 복잡함을 프리프로세서 내에서 대신 처리한다.

- 네이밍 방법 :
    - 가능한 짧고 간결하게 작성한다.
    - 동작과 형태가 예상 가능하도록 명확하게 작성한다.
    - 어떻게 생겼는지 보다는 어떤 목적인지 알 수 있도록 의미있게 작성한다.
    - 지나치게 구체적 이지 않게 일반적으로 사용가능 하도록 작성한다.

- 컨테이너와 컨텐츠를 분리 예시
    ```
    <div class="header common-width">Header</div>
    <div class="footer common-width">Footer</div>
    .header{
        position: fixed;
        top: 0;
    }
    .footer{
        position: absolute;
        bottom: 0;
    }
    .common-width{
        width: 700px;
        margin: 0;
    }
    ```

- 표현과 구조의 분리 (Separate structure and skin) : CSS를 Positioning / Styling으로 객체화하여 Mix & Match
    ```
    // 기존 방식
    <a class=”facebook_btn facebook_skin”>Facebook</a>
    <a class=”twitter_btn twitter_skin”>Twitter</a>

    // OOCSS 적용
    <a class=”btn skin facebook”>Facebook</a>
    <a class=”btn skin twitter”>Twitter</a>

    .btn { 공통 버튼 스타일 정의 }
    .skin {공통 스킨 스타일 정의}
    ```

## 2. SMACSS (Scalable Modular Architecture CSS)
- 범주화(categorization)로 패턴화 하고자 하는 방법론이다.
- 작성할 CSS를 비슷한 5가지 종류로 나눈다. <br>기본(base), 레이아웃(layout), 모듈(module), 상태(state), 테마(theme) 다섯가지의 범주를 제시한다.
    - Base는 기본 스타일이다. Reset, Variable 등을 포함한다. !important를 쓰지 않는다.
        ```
        body, p, table, form, fieldset, legend, input, button ... {
            margin: 0;
            padding: 0;
        }
        ```
    - Layout은 suffix "l-"을 붙인다. Layout은 ID 선택자를 사용해도 된다.
        ```
        // layout => l-
        // 주요 요소 ()
        #header {
            width: 400px;
        }
        #aside {
            width: 30px;
        }
        // 하위 요소
        .l-width #header {
            width: 600px;
            padding: 10px;
        }
        .l-width #aside {
            width: 100px
        }
        ```
    - Module은 table, icon, box 같이 재사용성이 높은 요소를 정의한다. 단, 위치기반의 클래스명 작명은 지양한다.
        ```
        .stick { ... }
        .stick-name { ... }
        .stick-number { ... }
        ```
    - State는 상태를 나타난다. active나 disable 등이며 suffix "is-"나 "s-"를 붙인다.
        ```
        .is-error { ... }
        .is-hidden { ... }
        .is-disabled { ... }
        ```
    - Theme는 전반적인 Look and feel을 정의하며 suffix "theme-"를 붙인다.
        ```
        // base.css
        .header {
            background-color: green;
        }
        // theme.css
        .header {
            background-color: red;
        }
        ```

## 3. BEM (Block Element Modifier)
- 개발, 디버깅, 유지보수를 위하여 CSS 선택자의 이름을 가능한 한 직관적이고 명확하게 만드는 것이 목표이다.
- 블록(block), 요소(element), 상태(modifier)로 구분하여 클래스 작성하며 엄격한 네이밍 규칙을 가진다.
- 클래스명이 용도와 형태를 의미하므로 직관적인 것이 장점, 길고 복잡해지는 것이 단점이다.
    - 네이밍 방법 :
        - 소문자, 숫자 만을 이용해서 작명한다.
        - 여러단어의 조합은 하이픈(-)으로 연결하여 작명한다.
    - 화면에 보여질 블록(block)을 기준으로 첫번째 순서의 네이밍을 작성한다.(block : 재사용 가능한 영역(header, footer, navigation…), 하나의 단어를 사용하되 길어질 경우 (-)를 사용)

        ```
        .header { ... }
        .block { ... }
        ```

    - 그 다음에 블록 안의 요소(elements)들을 "__"으로 연결해서 네이밍을 작성한다.

        ```
        .header { ... }
        .header__link { ... }
        .header__tap { ... }
        .header__tap__item { ... }
        ```

    - 그 다음에 상태(모양이나 modifier)를 "–"으로 연결한 뒤 네이밍을 작성한다.<br>(형태(red, big)가 아닌 목적(menu, button)에 맞게 결정해야 한다.)
        ```
        .header--hide { ... }
        .header__tap--big { ... }
        .header__tap--big { ... }
        ```
    - 블록이나 요소의 모양(color, size..), 상태(disabled, checked..)를 정의한다.<br> 수식어는 boolean이나 key-value 형태로 넣을 수 있다. (block__element—modifier, block—modifier 형태로 사용)
        ```
        .header__logo  { ... }
        .form__button–disabled { ... }
        ```

    - 혼합사용 (Mix)
    block1, block2__element 형태로 사용할 수 있다.
    block2__element 에 여백이나 위치를 지정하고 block1은 독립적으로 유지할 수 있다.
        ```
        <div class=”header”>
            <div class=”search-form header__search-form”></div>
        </div>
        ```


참고 : https://nalragg.tistory.com/69