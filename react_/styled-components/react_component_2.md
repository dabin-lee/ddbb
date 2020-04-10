# 리엑트에서 컴포넌트를 선언하는 두가지 방식
- 클래스형 컴포넌트 & 함수형 컴포넌트

## 함수형 컴포넌트
```
import React from 'react';
import './App.css';

function App() {
  const name = 'react';
  return <div className = "react">{name}</div>
}

export default App;
```

## 클래스형 컴포넌트
```
import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

export default App;
```

### 함수형, 클래스형 컴포넌트의 차이점

- 함수형 컴포넌트
    - state 기능 및 라이프 사이클 기능을 사용할 수 없음.
    - 리액트 버전 16.8부터 Hook을 이용해 클래스를 작성하지 않고도 위의 단점을 보안
    - 클래스형 컴포넌트보다 간단함.
    - 클래스형 컴포넌트보다 메모리자원을 적게 사용함.
- 클래스형 컴포넌트
    - state 기능 및 라이프 사이클 기능을 사용할 수 있음.
    - 임의 메서드를 정의할 수 있음.
    - render 함수가 반드시 필요.

## props

- porps는 컴포넌트의 속성을 설정할 때 사용하는 요소
- props는 JSX 내부에서 {} 기호 안에 넣어서 렌더링 한다.


    ### [함수형 컴포넌트 props]
    - 비구조화 할당을 사용하면 props의 값을 더 편리하게 할당 가능
    - 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용 가능
    ```
    ///함수형 컴포넌트에서 비구조화 할당 문법으로 props 사용하기
    import React from 'react';

    const MyComponent = ({ name, children }) => {
    return (
        <div>
        안녕하세요 제 이름은 {name}입니다.<br />
        children 값은 {children}입니다.
        </div>
        );
    };
    export default MyComponent;

    //App.js
    import {Person} from "./person";

    class App extends React.Component{
        render(){
            return(
                <div className = "App">
                    <person name={"이다빈"} age={30}></person>
                    <person name={"김민정"} age={30}></person>
                    <person name={"유승희"} age={24}></person>
                </div>
            );
        }
    }
    export default App;

    // 함수형props
    [1번]
    import React from 'react';
        const Person = (props) => (
        <div>
            이름은 : {props.name} 나이는 : {props:age}
        </div>
    )
    [2번]
    import React from 'react';
        const Person = ({name, age}) => (
        <div>
            이름은 : {name} 나이는 : {age}
        </div>
    )
    // 클래스형props
    [1번] this로 꼭 어떤 props인지를 알려줘야 한다.
    import React from 'react';
        render(){
            return(
                <div>
                 이름은 : {this.props.name} 나이는 : {this.props:age}
                </div>
            );
        }
    }

    [2번] this.props로 표기
    import React from 'react';
        const {name, age} = this.props;
        render(){
            return(
                <div>
                 이름은 : {name} 나이는 : {:age}
                </div>
            );
        }
    }



    ```
    ### [클래스형 컴포넌트 props]
    - render 함수에서 this.props를 조회한다.
    ```
    ///클래스형  컴포넌트에서 비구조화 할당 문법으로 props 사용하기
    import React, { Component } from 'react';

    class MyComponent extends Componenet{
        render(){
            const { name, favoriteNumber, children} = this.props
            retrun(
                <div>
                    안녕하세요, 제 이름은 {name}입니다.<br/>
                    children 값은 {children}입니다.<br/>
                    제가 좋아하는 숫자는 {favoriteNumber}입니다.
                </div>
            );
        }
    }
    export default MyComponent;
    ```


## state

- state를 가질 수 있는건 클래스 뿐
- component에서 저장해야 할 자료

- porps는 부모 컴포넌트가 설정한 값을 컴포넌트 내부에서 읽기만 가능한 값이지만 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
- 함수형 컴포넌트와 클래스형 컴포넌트에서 state의 사용방식이 다르다.

    ### [함수형 컴포넌트의 state]
    - 함수형 컴포넌트에서는 useState 함수로 state를 사용한다.
    ```
    class App extend React.component{
        state = {
            person : [
                {name : '박성준', age: 20 },
                {name : '이승준', age : 50}
                {name : '더너츠', age : 16},
                ]
        }
    }
    ```

    - useState 함수를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태
    - 두 번째 원소는 상태를 바꾸어 주는 함수이다.
    ```
    import React, {Component} from 'react';

    const Say = () =>{
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
    };
    export default Say;
    ```

    ### [클래스형 컴포넌트의 state]
    - constructor 안에서 this.state 값에 초깃값을 설정할 수도 있고
    - constructor 없이 바로 state 초기값을 설정할 수 있다.
    - 클래스형 컴포넌트의 state는 객체 형식이어야 한다.
    - this.setState 함수로 state의 값을 변경할 수 있다.

    ```
    import React, {Component} from 'react';

    class Counter extends Component {
    state = {
        number:0,
        fixedNumber:0
    };
    render(){
        const {number, fixedNumber} = this.state;
        return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{this.setState({number:number+1});
              }}
            >
            +1
            </button>
        </div>
        );
      }
    }
    export default Counter;
    ```


출처 : https://velog.io/@parksj3205/%EB%A6%AC%EC%97%91%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EB%A3%A8%EB%8A%94-%EA%B8%B0%EC%88%A0-3-6%EC%9E%A5-%EC%A0%95%EB%A6%AC