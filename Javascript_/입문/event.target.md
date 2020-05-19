DOM 객체의 요소에서 이벤트가 발생한 경우 해당 요소를 가져오는 방법?

event.target

<input id="Hello" name="helloName">Hello</input>

<script>

    const handleOnChange = e =>{
        console.log(e.target.name);
    }

    document.querySelector('#Hello').addEventListener("change", handleOnChange);

</script>


event.target 으로 이벤트 객체를 받아옵니다

이를 통해 객체의 모든 정보를 탐색할 수 있습니다.

