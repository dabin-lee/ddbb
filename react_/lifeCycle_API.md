컴포넌트가 브러우저상에서
1. 나타날 때
2. 업데이트 될 때
3. 사라질 때


![img_1](./img/lifecycle_api.png)
※ 초기 구성 ※



  React 컴포넌트 객체가 DOM에 실제로 삽입되기 전까지의 과정은 다음과 같습니다. 이러한 과정을 마운팅(Mounting)이라고 부릅니다.

# Mounting

## constructor
- 컴포넌트 생성자 함수 / 컴포넌트가 새로 만들어 질 때마다 이 함수가 호출된다.
```
constructor(props) {
  super(props);
}
```

## componentWillMount()
```
componentWillMount(){
  console.log("componentWillMount");
}
```
- React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드다.
DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, render가 호출되기 전이기 때문에 setState를 사용해도 render가 호출하지 않는다.

## render()
- 컴포넌트 렌더링을 담당한다.




## componentDidMount()
- 이 API 는 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다. 여기선 주로 D3, masonry 처럼 DOM 을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행합니다.
- 컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드다. AJAX나 타이머를 생성하는 코드를 작성하는 부분이다.

```
componentDidMount(){
  console.log("componentDidMount");
}
```

---

# Props Change

## componentWillReceiveProps(nextProps)
```

```