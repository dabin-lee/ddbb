
### alt / title
<br>

##### 1. `a` 요소의 접근성
- 왜 사용하는지?
  - `a` 요소는 웹 페이지를 이동하는 수단으로 매우 중요한 요소이기 때문에, 페이지를 접속하는 시각장애인은 스크린리더를 통해 `a` 요소만 모아서 읽기도 한다.
  <br> 그러면 문맥에 상관없이 `a` 요소들만 일괄적으로 읽게 되는데 이런 경우가 많다.<br> '여기'와 '이곳' 그리고 '방문하기'는 어디를  말하는 것인지, 이런 식의 작성이 접근성을 떨어트린다.
  ```
  링크 모아보기
  '뉴스페이지', '여기', '이곳', '방문하기'
  ```

  - '여기'와 같이 문맥 없이는 확인 불가능한 문구보다는 '뉴스 페이지 바로가기'와 같은 자세한 문구로 바꾸어 주는 것이 접근성을 높여준다.
  -  만약 부득이하게 안에 문구를 짧게 써야만 한다면, title 속성으로 부연설명을 적어주는 것도 좋은 대안이다.


##### 2. [alt]
```
<img src="news-1.jpg" alt="한 국회의원이 주민과 악수를 나누며 웃고있습니다." />
```

  - alt 속성 사용시 유의사항 - 필수
  - 1. img 태그에 alt 는 필수
  - 2. alt는 단순 명료, 중복 제거
  - 3. 의미 없는 이미지는 alt="" 제공
   - __title 속성은 alt 속성을 대체할 수 없으니 주의! alt 없이 title을 적어선 안됨.__
   - 명쾌하고 짧은 대체 텍스트를 제공
   - alt 속성으로 담기 어려운 긴 내용은 longdesc 속성을 활용. (단, 긴 내용은 텍스트로 표현을 권장)
   - 파일명을 대체 텍스트로 제공 지양
   - 이미지 맵에 대한 대체 텍스트 제공
   - 의미없는 이미지에는 공백으로 대체
   - 의미를 제대로 파악할 수 없는 대체 텍스트 지양
   - 의미있는 이미지에 무의미한 대체 텍스트 제공 지양
   - '~ 하십시오.', '~ 됩니다.' 등 친절한 설명을 자제하고 간단 명료하게
   - '링크', '여기', '클릭', '바로가기' 등의 목적지를 구체적으로 알려주지 않는 단어 사용하지 말자

```
  <p><img src="bullet.png" alt="블릿" /> 항목 1</p> <!-- X -->
  <p><img src="bullet.png" alt="" /> 항목 2</p> <!-- O -->
```
  - 스크린 리더에서 '블릿 이미지, 항목 1', '블릿 이미지, 항목 2' 이런 식으로 읽혀지게 되는 무의미한 내용
  - 이렇게 의미 없는 내용은 코드 두 번째 줄처럼 alt 속성을 선언만 하되, 값을 비워두어야 한다.
  - __단, alt 속성 자체를 쓰지 않으면 비 표준__
```
<a href="">
  <img src="thumb.jpg" alt="즐거운 여름 휴가" />
  <h2>즐거운 여름 휴가</h2>
</a>
```
  - img alt값과 아래 h2태그로 '즐거운 여름 휴가' 라는 말을 2번씩 반복하기에 의미없는 이미지 형태로 alt값을 비워두는것을 추천
```
<a href=""><img src="thumb.jpg" alt="" /></a>
<a href=""><h2>즐거운 여름 휴가</h2></a>
```
  - 하지만 a요소로 각각 싸여진 경우 img요소가 들어간 링크는 내용이 비어버리기에 alt값을 넣어줌. (이런 마크업은 비추!)

```
<h1 class="logo">
  <a href="http://www.bloodinfo.net/main.do" >
    <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부">
  </a>
</h1>
```
  - img의 alt은 이미지 글자 그대로 표현 - 로고 자 빼기
  - a요소에 이미 alt값 정보 표시 되어있기때문에 title까지 넣는건 지나침. 접근성 상에서도 스크린리더가 두번 읽게 됨으로 좋지않음.


##### 3. [title]
  - title 속성은 참고 제목이다. alt 또는 링크 텍스트만으로 충분하지 않을 때 추가적인 설명을 제공하기 위한 속성이므로 꼭 필요한 경우에만 사용해야 한다.
  - 이동할 목적지에 대해서 좀 더 명확하게 이해할 수 있게 title를 제공해야 한다. (해당 요소의 제목과 같은 역할)
  - a 요소의 텍스트 또는 이미지 등의 콘텐츠가 링크 정보를 정확하게 제시하고 있다면, title 속성을 사용할 필요는 없다.
  - `<a>`요소는 앵커(anchor)로써, 문서 간의 연결, `URI` 참조가 주된 목적이다.
  -  title 속성은 해당 요소를 부연 설명해 주는 속성으로, id 속성처럼 모든 요소에서 사용 가능하다.

```
1. <a href="sub01.html" target="_blank" title="서브페이지로 새창이동"><img src="sub01.jpg" alt="서브페이지"/></a> x
2. <a href="sub01.html" title="서브페이지로 이동"><img src="sub01.jpg" alt="서브페이지"/></a> x
3. <a href="sub01.html" ><img src="sub01.jpg" alt="서브페이지"/></a> o
```
   - 1번 2번은 alt속성이 있으므로 title을 제공하는 것은 중복된 정보 제공
   - 1번 target속성으로 새창으로 열림은 기계적으로 알 수 있는 것이므로 title속성 자체를 생략하는 것이 좋음
   - alt 또는 링크 텍스트만으로 충분하지 않을 때 title로 추가적인 설명할 것

```
<a href="..." title="공지사항">더보기</a>
```
  - 링크에서 title이 유용한 경우의 예시
  - 더보기라는 링크 텍스트가 맥락 정보를 제공하지 않기 때문에 무엇을 더 보는 링크인지 title 속성으로 설명

>  [차장님 피드백]
>
>  ```
>  1. _blank 사용 시 "새 창" 명시
>
>  1번) target속성으로 새 창으로 열림은 기계적으로 알 수 있는 것이므로 title속성 >자체를 생략하는 것이 좋음
>  ```
>
>  :collision: => _blank 라고 마크업 되어 있으면 스크린리더가 해당 내용을 인식해서 정보를 제공해 주는 게 기본적인 내용인데 문제는 스크린리더기도 종류별로 있어서 일부 스크린리더 에서는 해당 기능을 지원하지 않는 경우가 있기 때문에<br> _blank로 새 창 열림 할때는 title로 새 창 열림을 명시해 주어야 합니다.
>  <br>
>  &nbps; ( 단 a태그 내 이미지 alt값 이나 텍스트로 새 창 열림이 명시되어 있으면 생략 가능 합니다.)
>  ```
>  <a href="http://www.bloodinfo.net/main.do" target="_blank" title="새 창">
>    <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부">
>  </a>
>
>  <a href="http://www.bloodinfo.net/main.do" target="_blank">
>    <img src="/images/comm/logo.png" alt="대한적십자사 혈액관리본부 새 창 이동">
>  </a>
>  ```
> - 마크업 수정 예시
> ```
> <a href="https://www.facebook.com" target="_blank" title="facebook 새창열림">facebook</a>
> => <a href="https://www.facebook.com" target="_blank" title="새 창">facebook</a>
> ```
> 링크 내 텍스트로 새 창 이동 사이트를 facebook이라고 명시 하고 있어서 간단하게 __"새 창"__ 이라고만 사용 하면 됩니다.



##### 3. [target]
| target 속성 | 내용                                                                   | 출력                                                             |
|-------------|------------------------------------------------------------------------|------------------------------------------------------------------|
| _blank      | 새 윈도우 창을 열어서 웹페이지를 연다. 기존의 창은 그대로 남겨져 있음. | 새창을 띄운 후 출력                                              |
| _self       | 현재 윈도우 창에서 그대로 링크 된 웹 페이지를 연다.                    | 현재브라우저에 출력 기본                                         |
| _parent     | 현재 프레임의 부모 프레임에서 새 웹페이지가 열림.                      | 현재 브라우저를 포함하고 있는 상위 프레임에 출력                 |
| _top        | 최상위 프레임에서 열림. 현재 창에서 full window로 열기                 | 최상위 프레임에 출력                                             |
| framename   | iframe요소의 이름을 명시함                                             | 현재 윈도우가 아닌 다른곳에서 해당 문서를 볼수있도록 지정하는 것 |

[frame - name 속성]
  * name 속성 : 프레임의 이름에 붙이는 속성. 반드시 영문과 숫자의 조합으로 만들어야 한다. 이름사이에 여백과 특수문자는 사용 할 수 없다.
  * target = "framename" : frame태그의 name속성에 지정한 이름이 같은 frame에 보여짐
  * 웹 문서를 frame으로 나눌 때는 항상 'name'속성과 'target'속성을 지정

```
<frameset row = "*, *">
    <frame src="1.html" name="top">
    <frame src="2.html" name="right">
</frameset>
<p><a href="http://www.naver.com" target="right">네이버</a></p>
```
- _blank title : _blank를 사용한 경우, "ooo 사이트 새창으로 이동" 과 같이 새창이 열림을 명시적으로 말씀해 주는 바람직 합니다.<br>
target="_blank"를 사용한 경우 스크린리더에서 "새창열림"으로 인식가능 하므로, title에 "새창열림"을 적지 않아도 관찮습니다.<br>
하지만 스크립트 등을 이용하여 새창을 만드는 경우는 반드시 "새창열림"을 명시해야 합니다.



##### 4. [button]
  - `<button> `요소는 클릭함으로써 이벤트를 발생시키는게 주된 목적
  - 기능을 구현하는 것은 (ex. 팝업창을 띄우거나 어떤 요소를 숨기거나 보이게 하거나 등등) button 요소를 사용
  - 페이지 내 기능 a > button 으로 예시)
  -
```
  <ul class="btn-article">
    <li class="up"><a href="#" title="글자 크기 확대하기">글자 확대 버튼</a></li>
    <li class="down"><a href="#" title="글자 크기 줄이기">글자 축소 버튼</a></li>
    <li class="basics"><a href="#" title="글자 크기 기본">글자 기본으로 보기</a></li>
  </ul>

  <!--
    이런 경우가 a 대신 button type="button" 을 쓰라는 경우입니다.
    페이지 내의 기능이 들어간 경우.
  -->

  <ul class="btn-article">
    <li class="up"><button type="button">글자 확대 버튼</button></li>
    <li class="down"><button type="button">글자 축소 버튼</button></li>
    <li class="basics"><button type="button">글자 기본으로 보기</button></li>
  </ul>
```

##### 4. [그외]
- a 태그 하나만 적기 보단 div, span, ul li 감싸주는게 css 관련
- 또는 아래와 같이 a > span 사용
  <br> (저렇게 a태그 하나만 써도 되긴 하는데 디자인이나 기능이나 후에 수정을 생각해보면 달랑 a 말고 div > a 쓰는게 수정하기에 편하드)
	- `<a href="#" title="전체 목록열기"><span>전체메뉴</span></a>`
-  이미지가 외부 주소이기에 잘못되었거나 서버에 문제가 생기면 이미지를 못 읽어오기에 alt속성이 해당 이미지를 대체하여 나타낸다.<br>
    (게시판 / blind 를 써서 긴 텍스트를 정리해주는 방법은 좋으나, 한 문장 정도의 글은 alt로 채워넣어도 된다는 점.)

<!-- 읽어보기 : http://library.gabia.com/contents/domain/3010 -->



 <!--

 _brank가 있어서 새창열림은 제외, 아이콘의 툴팁생각했을 때 어떤 링크인지 title속성으로 설명

5. 새 창 기능은 정상적으로 되고 있지만 의미가 잘못되어 있습니다.
a태그 target 개념 이론 정리 해서 git에 올려 주시고
과제에도 반영해 주세요.
target="_blank|_self|_parent|_top|framename"

요청 기한  8월 7일

 -->


3) 검색엔진 최적화

(SEO : Search Engine Optimization)



검색엔진이 사이트를 크롤링할 때, Alt 속성을 이용하여

해당 상품을 더 잘 이해하고 검색결과 순위에서

적절하게 색인할 수 있도록 합니다.