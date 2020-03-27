
## 컴포넌트 이벤트 만들기 
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
