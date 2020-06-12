# input

- input 태그는 form 태그 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기 위해 사용된다. input 태그는 다양한 종류가 있는데 type 어트리뷰트에 의해 구분된다.
- form 태그 내에 존재하여야 입력 데이터를 전송할 수 있으나 ajax를 사용할 시에는 form 태그 내에 존재하지 않아도 된다.
- 서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.
- type값에 따라 애트리뷰트를 선언
- label 엘리먼트 또는 title 애트리뷰트를 선언한다. 스크린리더가의 활용을 위해서

## input- 속성
- `<input type="text" value="초기값" name="이름" />`
  - type : 입력 태그 유형 설정 속성
  - value : 사용자가 입력하는 값
  - name : 서버로 전달되는 이름 설정 속성
---

<label for="user_id">아이디</label> <input type="text" id="user_id" name="user_id">
 - type이 text일 경우

# label

- 라벨 가능 요소(labelable)의 제목(Caption).
  - for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함.
  - 라벨 가능 요소: button, input, progress, select, textarea
  - label 엘리먼트, title 애트리뷰트, alt 애트리뷰트를 통해 스크린 리더 사용자는 주변 맥락에 대한 이해 없이 각 엘리먼트에 독립적으로 접근해도 폼을 이해할 수 있다.
  - 속성 : for
  - 의미 : 참조할 라벨 가능 요소의 id 속성 값


 -
```
<!-- 라벨 가능 요소를 참조 -->
<input type="checkbox" id="user-agreement" />
<label for="user-agreement">동의하십니까?</label>

<!-- 라벨 가능 요소를 포함 -->
<label><input type="checkbox" />동의하십니까?</label>
```


- `<input type=text name='a' readonly="readonly">`
  - text 박스 읽기만 가능 / form값 전송 가능
- `<input type=text name='a' disabled="disabled"> `
  - text 박스 읽기만 가능 / form값 전송 불가능



```
<form action="http://localhost/login.php"> -> 작성된 내용이 서버로 전송 될 주소
  <p>아이디 : <input type="text" name="dabin"></p>
  <p>비밀번호 : <input type="password" name="pwd"></p>
  <p>주소 : <input type="text" name="address"></p>
  <input type="submit">
</form>

- 브라우저 주소에 뜨는 모습
localhost/login.php?id=dabin&pwd=1111&address=seoul
```

| type 어트리뷰트값 |                             Description                            | HTML5 추가 |   IE   | FF | CR | SF | OP |
|:-----------------:|:------------------------------------------------------------------:|:----------:|:------:|:--:|:--:|:--:|:--:|
|       button      |                              버튼 생성                             |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|      checkbox     |                            checkbox 생성                           |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       color       |                           컬러 선택 생성                           |      ◯     |    X   |  ◯ |  ◯ |  X |  ◯ |
|        date       |                     date control (년월일) 생성                     |      ◯     |    X   |  X |  ◯ |  ◯ |  ◯ |
|      datetime     | date & time control (년월일시분초) 생성. HTML spec에서 drop되었다. |      ◯     |    X   |  X |  X |  X |  X |
|   datetime-local  |            지역 date & time control (년월일시분초) 생성            |      ◯     |    X   |  X |  ◯ |  ◯ |  ◯ |
|       email       |          이메일 입력 form 생성. subumit 시 자동 검증한다.          |      ◯     | ◯(10~) |  ◯ |  ◯ |  X |  ◯ |
|        file       |                         파일 선택 form 생성                        |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       hidden      |                       감추어진 입력 form 생성                      |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       image       |                   이미지로 된 submit button 생성                   |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       month       |                          월 선택 form 생성                         |      ◯     |    X   |  X |  ◯ |  ◯ |  ◯ |
|       number      |                         숫자 입력 form 생성                        |      ◯     | ◯(10~) |  ◯ |  ◯ |  ◯ |  ◯ |
|      password     |                       password 입력 form 생성                      |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       radio       |                          radio button 생성                         |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       range       |                         범위 선택 form 생성                        |      ◯     | ◯(10~) |  ◯ |  ◯ |  ◯ |  ◯ |
|       reset       |                         초기화 button 생성                         |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|       search      |                        검색어 입력 form 생성                       |      ◯     |    X   |  X |  ◯ |  ◯ |  X |
|       submit      |                          제출 button 생성                          |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|        tel        |                       전화번호 입력 form 생성                      |      ◯     |    X   |  X |  X |  X |  X |
|        text       |                        텍스트 입력 form 생성                       |            |    ◯   |  ◯ |  ◯ |  ◯ |  ◯ |
|        time       |                         시간 선택 form 생성                        | ◯          | X      | X  | ◯  | ◯  | ◯  |
|        url        |                         url 입력 form 생성                         | ◯          | ◯(10~) | ◯  | ◯  | X  | ◯  |
|        week       |                       주 선택 입력 form 생성                       | ◯          | X      | X  | ◯  | ◯  | ◯  |


```
<!DOCTYPE html>
<html>
  <body>
    <h3>button</h3>
    <input type="button" value="Click me" onclick="alert('Hello world!')">
    <hr>

    <h3>checkbox</h3>
    <input type="checkbox" name="fruit1" value="apple" checked> 사과<br>
    <input type="checkbox" name="fruit2" value="grape"> 포도<br>
    <input type="checkbox" name="fruit3" value="peach"> 복숭아<br>
    <hr>

    <h3>color</h3>
    <input type="color" name="mycolor">
    <hr>

    <h3>date</h3>
    <input type="date" name="birthday">
    <hr>

    <h3>datetime</h3>
    <input type="datetime" name="birthdaytime">
    <hr>

    <h3>datetime-local</h3>
    <input type="datetime-local" name="birthdaytime">
    <hr>

    <h3>email</h3>
    <input type="email" name="useremail">
    <hr>

    <h3>file</h3>
    <input type="file" name="myfile">
    <hr>

    <h3>hidden</h3>
    <input type="hidden" name="country" value="Norway">
    hidden filed는 사용자에 표시되지 않는다.
    <hr>

    <h3>image</h3>
    <input type="image" src="img/img_submit.gif" alt="Submit" width="48" height="48">
    <hr>

    <h3>month</h3>
    <input type="month" name="birthdaymonth">
    <hr>

    <h3>number</h3>
    <input type="number" name="quantity" min="2" max="10" step="2" value="2">
    <hr>

    <h3>password</h3>
    <input type="password" name="pwd">
    <hr>

    <h3>radio</h3>
    <input type="radio" name="gender" value="male" checked> 남자<br>
    <input type="radio" name="gender" value="female"> 여자<br>
    <hr>

    <h3>range</h3>
    <input type="range" name="points" min="0" max="10" step="1" value="5">
    <hr>

    <h3>reset</h3>
    <input type="reset">
    <hr>

    <h3>search</h3>
    <input type="search" name="googlesearch">
    <hr>

    <h3>submit</h3>
    <input type="submit" value="Submit">
    <hr>

    <h3>tel</h3>
    <input type="tel" name="mytel">
    <hr>

    <h3>text</h3>
    <input type="text" name="myname">
    <hr>

    <h3>time</h3>
    <input type="time" name="mytime">
    <hr>

    <h3>url</h3>
    <input type="url" name="myurl">
    <hr>

    <h3>week</h3>
    <input type="week" name="week_year">
  </body>
</html>
```