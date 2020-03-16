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
import React from 'react';

class App extends Component {
  constructor(props){ //constructor 초기화
    super(props); 
    
      this.state = {
         Subject:{title:'WEB', sub: 'World Wid Web!'}
     };
   }
```
  * state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.

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
