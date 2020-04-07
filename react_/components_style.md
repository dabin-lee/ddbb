# components css styling

## 1. inline style
- 가장 간단하고 쉬운 방법 React 컴포넌트에 CSS inline-style을 바로 적용.
- Html엘리먼트의 style속성을 이용. css속성이 정의된 객체를 엘리먼트의 style속성에 넘겨주면 됨.

- 사용법
    - style 속성값에 일반 문자열이 아닌 자바스크립트 객체가 할당되야 합니다.
    - CSS 속성명이 케밥 케이스(kebab case)이 아닌 카멜 케이스(camel case)로 작성되야 합니다.
    - 예시
        1) white나 1rem과 같은 자바스크립트에는 존재하지 않는 키워드는 스트링값으로 인식할 수 있도록 ""(퀘테이션 기호) 사용
        2) font-size 같은 중간에 -(대시 기호)가 들어간 속성은 fontSize와 같이 카멜 케이스로 변경
        ```
        import React from "react";

        const btnStyle = {
        color: "white",
        background: "teal",
        padding: ".375rem .75rem",
        border: "1px solid teal",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5
        };

        function Button() {
        return <button style={btnStyle}>Inline</button>;
        }
        ```
    - css 속성명을 케밥 케이스로 바꿔줘야 하는 번거로움
    - :hover와 같이 pseudo-selecto 사용할 수 없음
    - 개발 중 임시로 스타일을 빠르게 적용해 볼 때 유용하게 쓰임

## 2. External stylesheet
- 별도의 스타일 파일, react 컴포넌트 파일에서 해당 css파일을 import.
- 엘리먼트 className속성을 이용해서 외부 파일에 정의된 스타일을 mapping
    - 예시
        1) 별로의 css파일
        2) 버튼 컴포넌트가 작성된 js파일에 css파일을 임포트
        3) class대신 className사용
        ```
        /// button.css
        .btn {
        color: white;
        background: teal;
        padding: 0.375rem 0.75rem;
        border: 1px solid teal;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
        }

        /// button.js
        import React from "react";
        import "./Button.css";

        function Button() {
        return <button className="btn">External</button>;
        }
        ```

---
1, 2번의 외부 스타일시트를 사용하는 방법은 React 앱의 규모가 커짐에 따라 CSS 클래스 이름이 겹치게 될 가능성이 커지게 된다. 기본적으로 글로벌 네임 스페이스(global namespace)를 사용하기 때문에, 만약 2개의 CSS 파일에 동일한 클래스에 대한 스타일이 정의되어 있다면, 해당 클래스가 적용된 엘리먼트는 2개의 스타일에 모두 영향을 받게 된다.
<br>
이 문제를 해결하기 위한 방법으로 각 CSS 파일에 고유의 네임 스페이스를 부여해주는 CSS 모듈(CSS Modules)이라는 기법이 있습니다. React 컴포넌트에 CSS 모듈을 통해서 스타일을 적용하는 방법은 다음과 같다.
---

## 3. CSS Modules
- 외부 스타일 시트를 작성할 때, .css확장자가 아닌 .module.css확장자를 사용해야 한다.
- React컴포넌트 파일에서 import할 때, import된 CSS모듈의 이름을 명시적으로 지정해준다. (import modlue_name from "./my/style.module.css";)
- element의 className속성을 할당해 줄 때, 해당 클래스가 어느 CSS모듈 소속인지 알려준다. (module_name.class_name)

    - 예시
        1) Button.module.css 파일을 생성하고, 위 섹션에서 작성한 Button.css 파일의 내용을 그대로 복사
        2) Button.module.css 파일을 임포트할 때, CSS 모듈명을 styles라고 지정
        3) className 속성에, 그냥 btn이 아닌 styles.btn
        ```
        import React from "react";
        import styles from "./Button.module.css";

        function Button() {
        return <button className={styles.btn}>Module</button>;
        }

        export default Button;
        }
        ```

- 이렇게 CSS 모듈을 사용하면, 각 CSS 파일마다 고유한 네임 스페이스를 부여해주기 때문에, 각 React 컴포넌트는 완전히 격리된 스타일을 보장받습니다. 따라서, 다른 CSS 파일에 btn 클래스에 대한 스타일이 정의가 되어 있더라도, 이 CSS 파일에 있는 btn 클래스는 영향을 받지 않게 됩니다.

출처 : https://www.daleseo.com/react-styling/