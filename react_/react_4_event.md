
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


## 이벤트에서 state 변경하기

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

```
- this의 값을 찾지 못한다면 함수가 끝난 직후에 .bind(this)를 쓴다.

```
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
- state값이 바뀐지를 알려면 setState({바꾸고 싶은값}); 을 쓴다.
