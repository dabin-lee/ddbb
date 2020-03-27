
## 이벤트 설치 
```
// App.js
render() {
    ...
    return (
      <div className="App">
        // jsx 주석
        {/* {<Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>} */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        ...
      </div>
    );
  }   
```


## preventDefault(): 이벤트가 가진 기본 동작을 하지 못하도록 막는 함수
```
<h1><a href="/" onClick={function(e){// 링크 클릭시 실행되는 사용자 정의 함수
              alert('hi');
              e.preventDefault();
              //debugger;
            }
```
- onclick 후 페이지가 reload 되지 않기 위해 a 의 기본적인 동작을 하지 못하게 한다
- debugger 라는 키워드로 실행을 멈추고 
- e라고 준 객체에 event가 발생한 태그의 기본적인 동작을 하지 못하도록 함 : e.preventDefault();


## 이벤트에서 state 변경하기 - setState

```
//App.js

return (
    <div className="App">
      {/* <Subject 
        title={this.state.Subject.title}
        sub="world wide web!">
      </Subject> */}
      <header>
          <h1><a href="/" onClick={function(e){// 링크 클릭시 실행되는 사용자 정의 함수
              alert('hi');
              e.preventDefault();
              // this.state.mode = 'welcome'; -> this의 값이 component 자신의 값을 가르키지 않고 아무값도 셋팅이 되어 있지 않음 
              this.setState({
            });
          }.bind(this)}>{this.state.Subject.title}</a></h1> 
          {this.state.Subject.sub}    
      </header>
      <Subject title="React" sub="For UI"></Subject>
      <TOC data={this.state.contents}></TOC> 
      <Content title={_title} desc={_desc}></Content>
    </div>
    );

//App.js
<header>
      <h1><a href="/" onClick={function(e){// 링크 클릭시 실행되는 사용자 정의 함수
          // alert('hi');
          e.preventDefault();
          // this.state.mode = 'welcome'; -> this의 값이 component 자신의 값을 가르키지 않고 아무값도 셋팅이 되어 있지 않음 
          this.setState({              
            mode : 'welcome' //바꾸고 싶은 값
          });
        }.bind(this)}>{this.state.Subject.title}</a></h1> 
      {this.state.Subject.sub}    
 </header>
      
      
```
- state 값을 함수의 형태로 변경해서 사용해야 하는 이유?
  - constructor 의 함수에서 이미 컴포넌트를 생성했기에 동적으로 state를 만들고 싶으면 setState의 함수에 변경하고 싶은 값과 객체의 형태를 준다. <br>
  (리액트만의 약속으로 setState를 쓰지 않으면 렌더링이 안됨)
- state값 을 바꾸려면 setState({바꾸고 싶은값}); 을 쓴다.
- 이벤트가 실행되는 함수 안에서 this는 아무런 값도 세팅되지 않은 상태
    👉 bind(this)로 현재 컴포넌트를 this로 사용 가능!


## .bind(this)
```

var obj = {name:'ㅇㅇㅇㅇ'};

function bindTest(){
	console.log(this.name);
}
bindTest();	// 값이 없음(this에 아무 값도 설정되어 있지 않으므로

// bind 함수로 obj를 this로 설정해서 새로운 함수 생성
var bindTest2 = bindTest.bind(obj);	
bindTest2();	// ㅇㅇㅇㅇ 출력

```
- render() 함수 안에서 this 값은 render() 함수가 속한 컴포넌트를 가리킴
- bind 함수
