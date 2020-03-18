## 상태 관리란 ?

* 사용자의 입장과 그것을 구현하는 입장
   * 사용자가 제품을 조작하는 장치 UI (사용하는 입장에서 중요)  : Props <br>
  👉 컴포넌트의 동작을 바꾸고 싶을 때 제공하는 문법적인 정보
   * Props의 값에 따라 내부적인 구현을 하는 메커니즘 : State  <br>
  👉 다양한 동작을 하는 컴포넌트 제작에 필수
   * Component가 좋은 부품이 되기 위해서는 외부의 Props와 Props에 따라<br>
     component를 구현하는 내부의 state가 철저히 분리되어 있어야 한다.<br>
     양쪽의 편의성을 각자 도모하는 것이 리액트이다. 

### state 사용

```
class App extends Component {
  constructor(props){ // 초기화
    super(props); 
    
    }
```
- 하나의 component가 실행될 때 render라는 함수 보다 먼저 실행 되면서, <br>
 그 컴포넌트를 초기화 시켜주는 코드는 constructor안에다 작성을 한다.  즉, 제일 먼저실행 (초기화 먼저 됨)

```
import React from 'react';

class App extends Component {
  constructor(props){ //constructor 초기화
    super(props); 
    
      this.state = {
         Subject:{title:'WEB', sub: 'World Wid Web!'} //Subject의 값을 state화 시킴
     };
   }
```
- this.state = {} 로 state값을 초기화 시킨다. 
- constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
- Subject의 property값과 객채를 준다.  title:'WEB', sub: 'World Wid Web!'
- {/* react에서 props에 ""(따옴표)로 묶어주면 문자열이 됨 */} <br>
  {/* javascript의 코드로써 사용하고 싶을때는 {}중괄호를 사용 */}

```   
   updateHeader(text){
       this.setState({
           header: "Header has changed"
       });
   }
```

* state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다. 
  ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해주어야 합니다. 
  (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)

```
render() {
    return (
    <div className="App">
      <Subject 
      title={this.state.Subject.title}
      sub="world wide web!">
      </Subject>
      {/* react에서 props에 ""(따옴표)로 묶어주면 문자열이 됨 */}
      {/* javascript의 코드로써 사용하고 싶을때는 {}중괄호를 사용 */}


      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}
```
  * state 를 렌더링 할 때는 { this.state.stateName } 을 사용합니다.
  
  ```
  //index.js : App.js를 사용하고 있는 파일
  ReactDOM.render(<App />, document.getElementById('root')); // APP이라는 컴포넌트를 실행하라는 코드
  
  코드의 값이 내부적으로 state값이 subject가 있는지 없는지 알 수 없다.
  외부에서 알 필요없는 정보를 철저히 은닉하는게 좋은 사용성을 만드는 핵심이다.
  
  APP이 내부적으로 사용하는 상태는 State라는 형태를 통해서 사용한다.
  그리고 그렇게 만들어진 state값을 Subject의 props값으로 줬음. -> 
  상위 컴포넌트인 앱의 상태를 하위 컴포넌트로 전달하고 싶을 때, 상위 컴포넌트의 state값을 하위컴포넌트의 props값으로 전달.
  ```

### 여러개의 state 다루는 방법 - key

```
 [state 사용해서 TOC 리팩토링]
 
import React, { Component } from 'react';

class TOC extends Component{
    render(){ 
        // 글 목록 생성
        var lists = []; //nav안에 있는 li가 나타나게 될 태그들을 lists 배열에 담음
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            //반복문이 실행 될 때마다 lists에다 아래 코드를 push
            i = i + 1; //props의 데이터 값 만큼 반복, 반복 할 때마다 i의 값은 +1 이된다.
        } 
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
```
-app의 내부 state를 TOC 컴포넌트에 주입 , 목록이 추가될 때마다 TOC를 열지 않아도 됨


```
  
```
- element 자동으로 생성시, 각각의 list항목은 props라는 key를 갖고 있어야 한다.  (key가없으면 console창에서 에러가 발생)

- data라는 props 사용자의 입장에서 
