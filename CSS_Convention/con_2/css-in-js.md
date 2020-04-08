## What is CSS-in-JS?
 : Javascript 안에서 CSS를 사용하는 방법론
 : 컴포넌트로 생각하기— 더이상 스타일시트의 묶음을 유지보수 할 필요가 없습니다. CSS-in-JS는 CSS 모델을 문서 레벨이 아니라 컴포넌트 레벨로 추상화합니다(모듈성).

    - Component에 집중
    - 컴포넌트 스타일을 컴포넌트 파일에서 관리
    - 외부 라이브러리와 함께 사용한다.
    - CSS 자체의 값을 컴포넌트 내부에서 사용 할 수 있음.
    - 자바스크립트의 추상화된 객체로 자동 변경 -> 인라인 스타일로 설정

    - Javascript를 이용해서 스타일을 선언적이고, 유지보수 가능.
    - JS를 CSS에 전환하는 고성능 컴퍼일러로, 런타임 및 서버 사이드에서 작동.
    - 이 코어 라이브러리는 낮은 레벨이며, 프레임워크에 구애받지 않음.
    - 플러그인 API를 통해 확장 가능


## 구현방식
- 세부적인 구현 방식에 차이가 있긴 하지만, 라이브러리의 기본 철학은 동일
    1. CSS 클래스 자동 생성 :
    작성한 스타일이 minify된 클래스로 변환되고, 문서에는 <style> 로 삽입되어 사용
    2. 인라인 스타일로 생성 :
    작성한 스타일을 태그에 인라인 스타일로 직접 삽입 (인라인 스타일로 작성하는 방법과는 다릅니다.)

>   비교
>   > [inline-style]
>   > ```
>   > const textStyles = {
>   >   color: white,
>   >   backgroundColor: black
>   > }
>   > <p style={textStyles}>inline style!</p>
>   > ```
>   >
>   > [CSS-in-JS]
>   > ```
>   > import styled from 'styled-components';
>   >
>   > const Text = styled.div`
>   >   color: white,
>   >   background: black
>   > `
>   > <Text>Hello CSS-in-JS</Text>
>   > ```

## css-in-js 의 장점
1. 컴포넌트로 생각하기 — 더이상 스타일시트의 묶음을 유지보수 할 필요가 없습니다. <br>
    CSS-in-JS는 CSS 모델을 문서 레벨이 아니라 컴포넌트 레벨로 추상화합니다(모듈성).
2. CSS-in-JS는 JavaScript 환경을 최대한 활용하여 CSS를 향상시킵니다.
3. "진정한 분리 법칙" — 스코프가 있는 선택자로는 충분하지 않습니다. <br>
CSS에는 명시적으로 정의 하지 않은 경우, 부모 요소에서 자동으로 상속되는 속성이 있습니다.<br> jss-isolate 플러그인 덕분에 JSS 규칙은 부모 요소의 속성을 상속하지 않습니다.
4. 스코프가 있는 선택자 — CSS는 하나의 전역 네임스페이스만 있습니다. <br>
복잡한 애플리케이션 내에서 선택자 충돌을 피할 수 없습니다. <br>
BEM과 같은 네이밍 컨벤션은 한 프로젝트 내에서는 도움이 되지만, 서드파티 코드를 통합할 때는 도움이 되지 않습니다.<br> JSS는 JSON으로 표현된 것을 CSS로 컴파일 할 때, 기본적으로 고유한 이름을 생성합니다.
5. 벤더 프리픽스 — 생성된 CSS 규칙은 자동적으로 벤더 프리픽스가 붙어있으므로 생각할 필요가 없습니다.
6. 코드 공유 — JavaScript와 CSS사이에 상수와 함수를 쉽게 공유할 수 있습니다.
7. 현재 화면에 사용중인 스타일만 DOM에 있습니다(react-jss).
8. 죽은 코드 제거
9. CSS 유닛 테스트!


## css-in-js 라이브러리 종류
| Styled Components | ![Styled Components](./img/Styled_Components.png) |
|-------------------|---------------------------------------------------|
| JSS-React         | ![Styled Components](./img/jss.png)               |
| glamorous         | ![Styled Components](./img/glamorous.png)         |
| Radium            | ![Styled Components](./img/radium.png)            |
| Stylotron         | ![Styled Components](./img/styletron.png)         |

- Radium
    - (inline style 방식, React에서 사용합니다.)
- JSS
    - (Framework 관계없이 사용가능, material-ui 에서 사용합니다.)
- Styled-components
    - (현재 가장 인기가 많습니다. 컴포넌트 기반 Framework에 최적화되어 있습니다.)