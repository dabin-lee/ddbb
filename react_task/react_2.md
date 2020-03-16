## component를 만드는 방법

- public : npm run start를 했을때, file을 찾는 document


* component를 만드는 코드
  - src -> App.js -> class App extends Component { ~ }
  - [App이라는 class]<br>
리액트에 component라는,  리액트가 갖고있는 클래스를 상속(extends)해서 새로운 클래스(class App)를 만들고 
그 class는 render라는 method를 갖고 있다. (이해가 안될 경우 object 공부, 하나의 template로 생각 하면 쉬움)



### 1. 컴포넌트 생성
 ```
// App.js
class Subject extends Component {	// 클래스명은 대문자로 시작
  render(){	// 클래스 안에 소속되는 함수는 앞에 function 생략 가능
    return (
      <header>	// 컴포넌트는 하나의 최상위 태그를 포함해야 함
          <h1>WEB</h1>
          world wide web
      </header>
    );
  }
}

* JSX
- JavaScript 문법의 확장
React는 JSX를 HTML로 변환하는 역할
```

### 2. 컴포넌트 사용
```
// App.js
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}
```

### 3. prop
 ```
-태그의 재사용성을 높이기 위한 속성
- props(속성)를 받고 그것을 바탕으로 훨씬 더 편한 컴포넌트를 만들 수 있다.

class Subject extends Component {
    render(){
      return (
        <header>
          <h1>{this.props.title}</h1>	// 현재 태그의 title 속성(props) 값
          {this.props.sub}	// 현재 태그의 sub 속성 값
        </header>
      );
    }
}
class App extends Component {
    render() {
      return (
        <div className="App">
          <Subject title="WEB" sub="world wide web!"></Subject>
          <Subject title="React" sub="For UI"></Subject>
        </div>
      );
    }
}
 ```

### 4-1. component 파일로 분리
```
//TOC.js
import React, { Component } from 'react';
//'react' 라는 라이브러리에서 아래의 component를 사용하기 위해서 Component를 로딩

class TOC extends Component{
    render(){
    return(
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
            </ul>
        </nav>
        );
    }
}

```

### 4-2. 외부 허용
```
//TOC.js
▽▼
export default TOC;
import React, { Component } from 'react';

class TOC extends Component{
    render(){
    return(
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
            </ul>
        </nav>
        );
    }
}
export default TOC;
//현재 component안의 여러가지 변수나 함수 등을 외부에서 사용할 수 있도록 허용하기 : export


//APP.js
▽▼
import TOC from "./components/TOC"
//TOC라는 컴포넌트를 from 경로 에서 가지고 옴
import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}

export default App;

```

