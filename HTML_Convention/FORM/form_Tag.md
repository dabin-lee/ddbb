# form
form 태그는 사용자가 입력한 데이터를 수집하기 위해 사용되며 input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있다.

| attribute |    Value   |                Description               |
|:---------:|:----------:|:----------------------------------------:|
|   action  |     URL    | 입력 데이터(form data)가 전송될 URL 지정 |
|   method  | get / post |   입력 데이터(form data) 전달 방식 지정  |

GET과 POST는 HTTP 프로토콜을 이용해서 사용자 입력 데이터를 서버에 전달하는 방식을 나타내며 HTTP request method라 한다
1) action
  * action 애트리뷰트는 서버 사이드 폼 핸들러이나 필수 선언 애트리뷰트이기 때문에, 마크업 단계에서 다음과 같이 선언한다.
    ```
    <form action="">
    </form>
    ```

2) method
   * GET
       * GET 방식은 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식이다. <br> 예) http://jsonplaceholder.typicode.com/posts?userId=1&id=1
       * 전송 URL 바로 뒤에 ‘?’를 통해 데이터의 시작을 알려주고, key-value형태의 데이터를 추가한다. 1개 이상의 전송 데이터는 ‘&’로 구분한다.
       * URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있으며 전송할 수 있는 데이터의 한계가 있다. (최대 255자).
       * REST API에서 GET 메소드는 모든 또는 특정 리소스의 조회를 요청한다.


   * POST
       * POST 방식은 Request Body에 담아 보내는 방식이다.<br>
        예) http://jsonplaceholder.typicode.com/posts
       * URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
       * REST API에서 POST 메소드는 특정 리소스의 생성을 요청한다.

```
<!DOCTYPE html>
<html>
  <body>
    <form action="http://jsonplaceholder.typicode.com/users" method="get">
      ID: <input type="text" name="id" value="1"><br>
      username: <input type="text" name="username" value="Bret"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
submit button이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다.

```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


# textarea
- textarea 태그는 여러 줄의 글자를 입력할 때 사용한다.

```
<!DOCTYPE html>
<html>
  <body>
    <textarea name="message" rows="10" cols="30">Write something here</textarea>
  </body>
</html>
```

# button
- button 태그는 클릭할 수 있는 버튼을 생성한다. <br> input type="button" 과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다.  <br>따라서 button 요소에는 텍스트나 이미지 같은 콘텐츠를 사용할 수 있다.
- type 어트리뷰트는 반드시 지정하는 것이 바람직하며 어트리뷰트값으로 button, reset, submit를 지정할 수 있다.

```
<!DOCTYPE html>
<html>
  <body>
    <button type="button" onclick="alert('Hello World!')">Click Me!</button>

    <input type="button" value="Click Me!" onclick="alert('Hello world!')">
  </body>
</html>
```

- button 태그는 어트리뷰트만을 받아들이는 input 태그와 달리 콘텐츠로 문자열은 물론 HTML 요소를 받을 수도 있다는 장점이 있다. 주의할 것은 IE의 경우, submit되는 값이 다를 수 있는 것이다.

```
<button type="submit" name="myButton" value="foo">Click me</button>
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# fieldset / legend
- fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용한다. legend 태그는 fieldset 태그 내에서 사용되야 하며 그룹화된 fieldset의 제목을 정의한다.
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
      <fieldset>
        <legend>Login</legend>
        Username <input type="text" name="username">
        Password <input type="text" name="password">
      </fieldset>
  </body>
</html>
```



# label

- 라벨 가능 요소(labelable)의 제목(Caption).
  - for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함.
  - 라벨 가능 요소: button, input, progress, select, textarea
  - 속성 : for
  - 의미 : 참조할 라벨 가능 요소의 id 속성 값

```
<!-- 라벨 가능 요소를 참조 -->
<input type="checkbox" id="user-agreement" />
<label for="user-agreement">동의하십니까?</label>

<!-- 라벨 가능 요소를 포함 -->
<label><input type="checkbox" />동의하십니까?</label>
```


`<input type=text name='a' readonly="readonly">`

- text 박스 읽기만 가능 / form값 전송 가능

`<input type=text name='a' disabled="disabled"> `

- text 박스 읽기만 가능 / form값 전송 불가능
