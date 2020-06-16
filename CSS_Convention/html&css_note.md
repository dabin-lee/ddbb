
## HTML과 CSS 작성
```
* class명은 언더바( _ )  ID는 카멜기법
* 클래스명은 항상 한 단어로 사용하지 않음 언더바를 붙일 것
* 클래스명은 언더바 ( _ ) 또는 하이픈 ( - ) 둘중 하나로 통일할 것
* 클래스명에 예약어 사용하지 않기 충돌위험이 큼
* 애매한 클래스명은 쓰지 않고, 풀네임을 지향
* 클래스명을 넣어주는게 나은지 잘 확장성이나 동적인 요소 생각해서 움직일것
* 클래스명은 최대 3~4개

* ID는 Style로 사용하지 않음
* id는 page당 1개를 사용
```

### * board & ul,li 관련
```
* ul 태그에는 class를 넣어서 정리하는것이 가장 best
* li하나하나에 클래스 주지 말기
* table은 ul li로 사용하기
* dl, dd, dt는 사용하지 않기
* 확장성을 위해 CSS에 HTML 태그를 적지말자 div.classname{...} or p.classname{...}
* 의존적인 스타일을 피하자 .class p{...}
* board안에 텍스트는 p태그로 감싸고, 리스트이면 ul li
* 형태가 변경이 될 수 있는 list같은 경우는 선택자를 쓰기보단 class를 준다.
* 게시판 같은 경우도 특정할 수 있는 클래스를 넣어주기
```

### Img관련 - html
```
* figure태그는 안에 항상 img태그
* figure는 이미지, 도표. code 등의 내용들이 들어 갈 수 있음
* img태그가 여러개 있을 경우(갤러리처럼) figurecaption을 사용해서 설명문을 넣어줌
```

### Img관련 - css
```
* bg이미지는 position값이 항상 5단위 10단위로 끊어지게
* 이메일, 모바일, 전화와 같은 html은 a태그를 넣어서 연결이 가능하도록
* img영역같은 경우, width와 height로 강제적으로 넣지 말고 img밖은 overflow:hidden과 img는 position값으로 비율이 무너지지 않도록
* 경로는 절대경로로 넣어서 쓰도록
* bg이미지는 position값이 항상 5단위 10단위로 끊어지게
    -  https://skbroadband.com/Main.do
    -  https://skbroadband.com/common/img/vin/common/icon_color_set.png

```

### * 기타 CSS관련
```
* 아래 class에서 margin-top으로 주고, margin-bottom은 쓰지 않음
* line-height랑 폰트사이즈랑 맞춰쓰지 않고 em으로 사용할 것
* inline-block에 font-size : 0은 접근성에 좋지 않음(예상한 여백이라면 그대로 둘것)
* 모든 이미지를 스프라이트 하지 말자
* 높이를 고정시킨 상태에서의 정렬을 피하자
* 텍스트를 이미지로 사용하지 말자
* 너무 이른 최적화는 피하자
* 쓸모 없는 것을 두번 반복해서 사용하지 말자
```


### * 기타 html관련
```
* section에는 class나 ID값을 넣지 않는다. (HTML5 시멘틱 태그 모두)
* 컨텐츠 사이 br 태그는 없도록
* 아예 클래스가 없는것은 div가 아닌 p태그를 사용
* div는 그냥 분리되는 태그의 의미이기에 div태그 안에 inline태그는 지양
* 변화가 생기는 점을 고려해서 마크업을 해야 함.
* 눌렀을 때 동작이 되는 것은 동작 되게끔 만들어 줘야 한다.
* 부수적으로 표현되는 것들은 클래스명을 다르게 해야한다.<br>
지양) btn_small btn_white x / 지향) btn_small type_white
```

### * form 태그 관련
```
- input type이 text일 경우 : type, id, title, value 순서로 속성을 선언한다.
- input type이 radio, checkbox 일 경우 :type, name, id, checked 순서로 속성을 선언한다.
- input type이  image인 경우: type, src, alt 순서로 애트리뷰트를 선언한다.
- 폼 전송 역할을 하는 디자인 버튼 -> image 타입 사용.
- 디자인이 적용되지 않는 버튼은 button type="submit"

```

## CSS 정리

* 세미콜론 뒤에는 뛰어서 가독성을 좋도록
* 공통적으로 들어가는 css는 맞춰서 하나에 넣도록 할 것
* css작성 순서 맞춰서 쓰도록 하기
* 중요도 : !important > HTML에 Style > #id > .class, :class > 태그이름 > 상위 객체에 의한 상속된 속성

|    지정방법    | 예제              |
|:--------------:|-------------------|
|   !important   | !important        |
|  HTML 직접기입 | style=""          |
|       ID       | #sample           |
|      Class     | .sample           |
|   속성선택자   | a[href*="sample"] |
| 가상클래스속성 | :first-child      |
|   태그선택자   | ul                |
|    전체선택    | *                 |


## 그외
 * 링크에 연관된 title 잘써주세요
 *  `<div class="summary__title">How people build&nbsp;software</div>`
 - &nbsp;를 띄어쓰기 없이 쓰므로써 build&nbsp;software 이 부분을 한 문장으로 인식함
<<<<<<< HEAD

=======
 
=======
>>>>>>> 39eb7b03852c72af20e42ee4638b96585b91342e

## title
 * 링크에 연관된 title 잘써주세요
