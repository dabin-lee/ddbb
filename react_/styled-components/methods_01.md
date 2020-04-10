
## Styled Components는 대표적인 CSS-in-JS 라이브러리이다. 따로 CSS 파일을 두지 않고 React Component 내에 Javascript와 같이 스타일링 코드를 적용한다.

### Setup
 1. npm install styled-components
 2. setup - vscode styled-components
 3. version check - npm install styled-components -v









```
//App.js
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class app extends Components{
    render(){
        return(
            <Fragment>
                <Button>Hello</Button>
		        <Button danger>Hello</Button>
            </Fragment>
        )
    }
}
```
- styled 객체 안에 'styled-components'를 import
- Button 변수에 styled.button 방식으로 html button 태그를 css와 함께 담아준다.

```
//styled-componenets
const Button = styled.button`
    border-radius : 50px;
    ...
    ...
`;

export default App;
```

