# 접근성
- https://seulbinim.github.io/WSA/

#### button, a, input 태그
`<a>`요소g
- URI를 ‘연결‘하기 위한 버튼으로서 `<a href="#url">` 형식으로 마크업 합니다.

`<button>`요소

- URI를 연결하지 않고 단순하게 사용자 인터페이스만를 ‘조작‘하기 위한 버튼으로서 `<button type="button">` 엘리먼트로 마크업 합니다.
-  type을 명시하지 않으면 어떤 브라우저는 Form Submit 기능을 실행하기 때문에 반드시 type 속성을 button으로 지정해 주어야 합니다.

`<input>`요소
- 사용자의 입력을 서버로 '전송' 하기 위한 버튼으로서 `<input type="submit">`, `<button type="submit">` 엘리먼트로 마크업 합니다.




#### button, a, input 태그 접근성에 관하여
-  버튼의 목적을 명확하게 판단한 뒤 알맞는 엘리먼트를 사용하는 것은 접근성을 향상시켜 줍니다.

-  최근에는 Javascript를 지원하지 않는 브라우저 환경이 드물지만 되도록 Javascript에만 의존하여 기능을 수행하지 않도록 하는 것이 좋습니다.

-  특히 Link Button을 이용하여 Form을 전송하는 기능을 구현하면 Javascript를 지원하지 않는 환경에서의 상호 운용성을 확보하지 못하고 화면낭독기 장치를 이용하는 사람들의 접근성을 떨어 뜨리게 됩니다.

- Form 페이지의 전송 버튼을 ‘submit’ 버튼 대신 ‘a’  버튼으로 마크업 하는 경우 화면 낭독기는 HTML기반으로 내용을 읽어 주기 때문에 이것을 ‘~링크’라고 읽어 주고 시각장애인은 이것을 ‘~전송 버튼’이라고 확신할 수 없는 문제가 발생 합니다.
-  `<button onclick ="window.location.href='/page2'">continue</button>`<br>

-> javascript를 필요로 하기 때문에 스크린 리더기에는 접근성이 좋지 않음
버튼을 링크처럼 작동시키는 것은 잘못된 해결책이다.
* 링크를 사용하고 버튼처럼 보이도록 스타일을 지정해야 한다.



출처: https://jsunnylab.tistory.com/38 [Jsunny Lab]


#### name 과 value의 차이점
- name은 서버전송을 위해 꼭 필요한 필수 값
- value는 폼 필드에 기본적으로 입력을 해주는 값.


#### label의 관해서
- label태그?
- label은 for속성과 id속성을 명시함으로써 연결해주는 방식을 의미한다.
- 스크린 리더기와 같은 통신 기기가 label태그를 통해 연결된 input 태그를 인식한다.
- 명시적, 암시적 label
```
// 명시적
<label for="name">이름</label>
<input type="text" id="name"/>

// 암시적
<label>
	이름 <input type="text" id="name"/>
</label>

```

#### form

- input 요소를 특정 페이지로 전송하는 역할
- form안에는 하나의 submit만 존재
- 양식과 button이 모두 form 안에 포함되어야 한다.

####  dl dt dd

- `<li>` 사이에 br이 들어가면 안되는 거 처럼
- `<dd>` 사이에 br 태그 들어가면 안되어요.
- `<dl><dt></dt><dd></dd></dl>` 는 세트잖아요.


<!--
    button type="button" : 일반 버튼 사용자 ui
    button type="submit" : 데이터 서버 전송을 위함
-->

https://mygumi.tistory.com/359
https://juyeol.tistory.com/25



- a, button, input요소는 tab으로 접근이 가능해야 한다.


### IR 기법
- IR이란? (Image Replacement) - 이미지를 볼 수 없는 사용자에게 적절한 대체 텍스트를 제공하는 것

1) IR 기법소개
    - 배경 이미지로 처리한 의미 있는 아이콘, 로고<br>
    `<a href="/" class="logo_naver" data-clk="top.logo"> <span class="blind">네이버</span> </a>`
   - 이 외 고정된 이미지들 -> sprite이미지 이용
   - 전체가 이미지로 되어있는 이벤트 페이지의 경우
   - 광고 배너 같은 경우에는 데이터가 계속해서 변하기 때문에 서버에서 이미지를 내려 준다. 이런 경우에만 이미지를 사용한다.


2) 요소 숨김 처리
    - 시멘틱 마크업 -> css로 요소를 숨김처리 -> 스크린리더가 인식

- [BAD] 스크린 리더가 인식 못함
    - 1) visibility: hidden; //투명도를 0으로 주는 것과 동일하게 화면에서 사라지지만, 스크린 리더 인식 안함
    - 2) display: none; //요소가 아예 없는 것으로 인식
    - 3) width :0; height:0; font-size: 0; line-height:0; //요소의 사이즈가 0이 되면 스크린리더 인식 안함

- [SOSO] 다음으로 상황에 따라서 사용해도 되는 그런 방법들 - 레이아웃이나 성능 등의 상황에 따라서 이슈가 발생
    - 1) text-indent: -9999px; //전체 레이어의 크기가 지나치게 크게 잡힘: 성능 이슈
    - 2) opacity: 0; // 투명해진 것 뿐, 위치를 그대로 잡고 있기 때문에 단독으로 사용 불가능
    - 3) z-index: -1; // position 속성 추가해야 함: position: relative 때문에 성능 이슈가 발생

- [BEST] 스크린 리더가 인식하면서 레이아웃이나 성능 등에 영향을 미치지 않는 방법으로, 아래 속성들을 조합해서 사용.

  - HTML 전체적으로 많이 쓰이기 때문에 클래스로 처리하는 것이 효율적입니다.
    ```
    <span class="blind">숨김 텍스트</span>
    .blind {
        /* 눈에 보이는 부분을 제거1 */
        border: 0;
        padding: 0;
        margin: 0;

        /* 레이아웃에 영향을 끼치지 않도록 */
        position: absolute;

        /* 스크린 리더가 읽을 수 있도록 */
        width: 1px;
        height: 1px;

        /* 눈에 보이는 부분을 제거3 */
        clip: rect(0 0 0 0);
        overflow: hidden;

        clip: rect(1px 1px 1px 1px); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
        clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
        clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
        white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */


    }
    ```
    - clip: rect(top right bottom left);
      - 네개의 좌표로 지정한 직사각형 모양대로 요소를 잘라내는 속성이다.
      - position 속성 값이 absolute 혹은 fixed인 요소여야하고, 만약 overflow 속성 값이 visible일 경우에는 적용이 되지 않는다.
      - 예시) https://www.codingfactory.net/10636

3) IS(Image Sprite)
- ★ 이미지들을 하나의 이미지로 배경 처리해서 최적화 시킬수 있는 기법
- 조각난 이미지 파일들을 하나의 파일로 병합 후 배경으로 처리해서 웹 문서 전송 속도를 높이는 기법. <br>
  이 때 의미가 있는 이미지는 전경에 상응하는 텍스트를 포함시켜서 접근성을 확보해야 하기 때문에 IR(Image Replacement) 기법이 함께 사용 된다.




출처: https://freemi99.tistory.com/entry/Tip-IR기법과-IS기법 [꿈을꾸고있는]


<<<<<<< HEAD
4) tabIndex - 
=======
### 태훈대리님 컨펌
[공통]
	1. a태그에 title를 자주 사용합니다! - 접근성 관려도 있고
	    GTM 관련 데이터 뽑아갈때 title에서 텍스트 뽑아가시기도 합니다
	2. gnb 등 실무 하듯이 class도  입력해주세요
	3. header, main, footer 를 다 감싸는 div 태그 하나가 필요할듯 합니다~ EX ) <div class="wrap"> ~ </div>
	4. 이건 참고용 alt 값 img태그로 이미지란걸 이미 알기에  아이콘 이미지, 헌혈 이미지 이런식으로 안적어도 됩니다~
	5. html5 태그는 저도 잘 안써봐서 연습할때 많이 써보는건 굳굳
	   실무에선 충분히 이해하고 사용하면 더 좋을 것 같아요
	6.  참고 + (다음으로 오는) > 자식  div.test (test 클래스를 가진 div )

>>>>>>> 9021f06563e3fa7d7c26d28792a95603eb9ecb9b
