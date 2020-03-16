## component를 만드는 방법

- public : npm run start를 했을때, file을 찾는 document


* component를 만드는 코드
  - src -> App.js -> class App extends Component { ~ }
  - [App이라는 class]<br>
리액트에 component라는,  리액트가 갖고있는 클래스를 상속(extends)해서 새로운 클래스(class App)를 만들고 
그 class는 render라는 method를 갖고 있다. (이해가 안될 경우 object 공부, 하나의 template로 생각 하면 쉬움)



## component를 만들 때 주의 점
 - 1. 컴포넌트 생성
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

 - 2. 컴포넌트 사용
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

 - 3. prop
 ```
 태그의 재사용성을 높이기 위한 속성
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
