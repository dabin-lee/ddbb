# webpack & babel 
 리액트 프로젝트를 만들게 되면서, 컴포넌트 를 여러가지 파일로 분리해서 저장 할 것이고, 또 이 컴포넌트는 일반 자바스크립트가 아닌 JSX 라는 문법으로 작성하게 됩니다. 여러가지의 파일을 한개로 결합하기 위해서 우리는 Webpack 이라는 도구를 사용하고, JSX 를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해서 우리는 Babel 이라는 도구를 사용합니다.


## [webpack]
 - bundle your scripts
 - 프로젝트시 만든 파일 하나하나 -> bundling 작업 
 - 이미지 압축 등, 특정 경로에 특정 문서로 저장됨 / 규칙에 따라 분리도 가능함

 ## [babel]
 - 자바스크립트 변환 도구 / 웹 프로젝트를 만들 때 전체적으로 파일을 관리해주는 도구
 - 새로운 자바스크립트 문법을 사용 할 수 있게 빌드를 시켜주고 여러 종류 브라우저에서 실행이 될 수 있도록 컴파일 시켜준다.

<br>
<br>

# JSX
- HTML과 유사하지만, 자바스크립트로 변환이 된다.
- 지켜야 할 규칙
    1. 꼭 닫혀야 하는 태그 - 태그는 꼭 닫혀있어야 합니다. <div> 태그를 열었으면, </div> 를 통하여 태그를 꼭 닫아주어야 한다.
    <input type="text"> -> <input type="text" /> //셀프 클로징 태그
    ```
    import React, { Component } from 'react';

    class App extends Component {
    render() {
        return (
        <div>
            <input type="text" />>
        </div>
        );
    }
    }

    export default App;
    ```

    2. Fragment 사용 <br>
        - 감싸져 있는 엘리먼트 : 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다. <br>
        - 2개의 div의 렌더링을 위해 새로운 div로 감싸는 사용이 맘에들지 않을 수도 있다. 예를 들어서, 스타일 관련 설정을 하면서 코드가 꼬이게 될 수도 있고, table 관련 태그를 작성 할 때 번거로워질 수 있기에 Fragment 를 사용 한다.
        - fragment 를 사용하면, console에서도 불필요한 div가 사라진다.


    ```
    import React, { Component, Fragment } from 'react';

    class App extends Component {
    render() {
        return (
        <Fragment>
            <div>
            Hello
            </div>
            <div>
            Bye
            </div>
        </Fragment>
        );
    }
    }

    export default App;

    ```

- JSX 안에 자바스크립트 값 사용하기
    1. 선언된 변수와 상수를 이용해 JSX 내부(중괄호 안)에 사용한다. 
    ```

        import React, { Component, Fragment } from 'react';

        class App extends Component {
        render() {
            const name = 'react';
            return (
                <div>
                    hello {name}
                </div>
                );
            }
        }

        export default App;

    ```
    2. let과 const - 새로운 변수 선언 키워드 

        >   - ES6 에 도입된 키워드
        >   - const는 한번 선언하고 바뀌지 않는 값을 설정 할 때 사용 <br>
            let은 선언 해도 재 선언으로 변화 할 수 있는 값
        >   - 기존 자바스크립트의 var 과 비슷하되 작동 방식에 있어서 scope 가 다르다.<br> (var 은 scope 가 함수단위 : 변수의 범위가 함수 전체에 작용한다는 의미)
        >   -  const 와 let 은 scope 가 블록 단위이다. <br>
        Block scope 는 중괄호 ({ }) 를 기준으로 유효범위를 갖는다.

    ```
        function foo(){
            var a = 'hello';
            if (true) {
                var a = 'bye';
                console.log(a); // bye
            }
            console.log(a); // bye
        }

        function foo(){
            let a = 'hello';
            if (true) {
                var a = 'bye';
                console.log(a); // bye
            }
            console.log(a); // hello
        }

    ```

    3. 언제 써야할까? var vs const vs let
        > var : ES6에서는 더 이상 사용하지 않음.
        > const : 한번 선언 후 고정적인 값을 사용 할 때
        > let : 한번 선언 해도 바뀔 수 있는 유동적인 값

    4. 조건부 렌더링
        > 1) 중괄호 안에 직접적으로 if문을 사용 할 수 없다. JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용한다.
        >   ```
        >   // 삼항연산자
        >    <div>
        >        {
        >        1 + 1 === 2    // 맞아요! 
        >                       // 1 +1 === 3시 틀려요! 출력
        >           ? (<div>맞아요!</div>)
        >           : (<div>틀려요!</div>)
        >        }
        >    </div>
        >   ``` 
        >
        >   ```
        >   // AND 연산자
        >    <div>
        >       {
        >            1 + 1 === 2 && (<div>맞아요!</div>)
        >       }
        >    </div>
        >   ``` 
        >
        > 2) IIFE : 즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression) <br>
        >    - 정의되자마자 즉시 실행되는 Javascript Function 를 말한다.<br>
        >    - 조건이 여러개일 경우에는 대부분 JSX 밖에서 하는 것이 일반적이지만,
        >    내부에서 여러가지 조건으로도 렌더링을 할 수 있다.  
        >    <br>
        >    - (1) 첫 번째는 괄호((), Grouping Operator)로 둘러싸인 익명함수(Anonymous Function) 이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다. <br>
        >    - (2) 두 번째 부분은 즉시 실행 함수를 생성하는 괄호()이다. 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다.
        >    ```
        >    import React, { Component } from "react";
        >    import "./styles.css";
        >
        >    class App extends Component {
        >    render() {
        >        const value = 2;
        >        return (
        >        <div>
        >            {
        >           (function() { // 화살표 함수
        >            if (value === 1) return <div>1이다</div>;
        >            if (value === 2) return <div>2이다</div>;
        >            if (value === 3) return <div>3이다</div>;
        >            console.log("ddd");
        >            })()
        >           }
        >        </div>
        >        );
        >      }}
        >   
        >    export default App;
        >    ```
        >
        >   - (3) 화살표 함수 표현(arrow function expression)
                - function 표현에 비해 구문이 짧고  자신의 this, arguments, super 또는 new.target을 바인딩 하지 않습니다. 
                - 화살표 함수는 항상 익명입니다. 
                - 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적합합니다. 그래서 생성자로서 사용할 수 없습니다.
        >   ```
        >   