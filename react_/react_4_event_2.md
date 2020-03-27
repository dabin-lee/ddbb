
## 컴포넌트 이벤트 만들기 
```
// App.js
  
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    //mode의 값에 따라서 만들어지는 렌더링 결과가 달라지도록.
    return (
    <div className="App">
      <Subject 
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}         
        onChangePage={function(){
           this.setState({mode:'welcome'});
          }.bind(this)}
          >
      </Subject>
      <TOC data={this.state.contents}></TOC> 
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;

//Subjec.js

import React, { Component } from 'react';

class Subject extends Component{
    render(){ 
        return(
            <header>
                <h1><a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}    
            </header>
        );
    }
}

export default Subject;

```

 - onChangePage라는 event함수를 만듬 / 그 이벤트가 발생 되었을때, 
 this.props.onChangePage();를 호출
 - 호출 되었을때 state값 변경  -> this.setState({mode:'welcome'})

 ```

 ```
- welcome 안의 각각 li를 클릭했을 때 content문서가 나올 수 있도록
- TOC에 있는 onChangePage의 props를 TOC 안에서 받아야 함



```
//TOC.js
import React, { Component } from 'react';

class TOC extends Component{
    render(){
        var lists = []; 
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                onClick={function(e){
                    e.preventDefault();//클릭했을 때 페이지가 바뀌지 않도록
                    this.props.onChangePage();
                }.bind(this)}
                >{data[i].title}</a></li>);
            i = i + 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
            );
        }
    }

export default TOC;
```
- TOC안에 onClick함수를 만들어 준다. 


```
//App.js

return (
    <div className="App">
      <Subject 
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}         
        onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
      </Subject>
      <TOC onChangePage={function(){
        this.setState({mode:'read'});
      }.bind(this)}
      data={this.state.contents}
      ></TOC> 
      <Content title={_title} desc={_desc}></Content>
    </div>
    );

```
- App.js 컴포넌트의 mode의 값이 read가 될 수 있도록 TOC에 setState설정


[클릭한 컨텐츠가 본문에 표시 될 수 있도록]
```
//App.js

```
- selet된 content ID가 표시 selected_content_id:2,
