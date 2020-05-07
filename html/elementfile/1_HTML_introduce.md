# HTML(Hyper Text Markup Language)
- HyperText 기능을 가진 문서를 만드는 언어. 구조를 설계할 때 사용되는 언어로 hyper link 시스템을 가지고 있으며, 흔히 말하는 웹 페이지를 위한 마크업 언어이다.

## 1.시멘틱 마크업(Semantic Markup)
- Semantic Markup은 종종 POSH(Plain Old Semantic HTML)라고도 불리우는데 말 그대로 평범하고 오래된 의미론적인 HTML이라는 뜻입니다. 비주얼 디자인(모양, 색, 크기 등)이 목표가 아니라, 구조 설계(Structure Design)를 목표로 합니다.

## 2. HTML 문서 작성을 위한 기본 문법
- HTML 문서인 웹 페이지는 head 영역과 body 영역으로 구성됩니다.
문서의 타이틀(title) 은 웹 페이지의 제목으로 브라우저 탭에 표시됩니다.

## 3. HTML 용어
| 용어      | 설명      |
|-----------|-----------|
| element   | 요소      |
| open tag  | 여는 태그 |
| close tag | 닫는 태그 |
| attribute | 속성      |
| value     | 값        |

## 4. 텅빈 요소
- 컨텐츠(contents)를 감싸지 않아 비어있다는 의미로, 닫는 태그를 갖고 있지 않습니다.
```
- <area>
- <base>
- <br>
- <col>
- <embed>
- <hr>
- <img>
- <input>
- <link>
- <meta>
- <param>
- <source>
- <track>
- <wbr>
```
## 5. HTML 문서 작성을 위한 DTD
- 문서 유형 정의 DTD(DOCTYPE or Document type Definition) : DTD는 HTML 문서의 반드시 최상 위에 위치해야 합니다. DOCTYPE 의 버전별선언(HTML5, HTML4, XHTML)에 따라서 HTML 은 지원하는 태그가 조금씩 다릅니다.
- html태그 안에는 head와 body로 크게 나눠져 있습니다. html 태그의 속성으로 문서에서 다룰 언어를 지정하고, head 안에는 콘텐츠를 표현하는 내용은 없지만 콘텐츠를 표현하기 위한 내용들을 포함하게 됩니다.
- meta(메타 태그) : 문서의 정보(문서의 핵심키워드, 누가 만들었는지, 문자셋(언어설정) 등)를 브라우저와 검색엔진에게 이 문서가 어떤 정보를 가지고 있는지 알려주는 것을 명시합니다.
- title 은 문서의 정보를 브라우저에 표시하는 역할입니다.
- link 는 외부자원(external file)이라고 합니다.
- 콘텐츠 영역을 의미하는 body 태그에 웹 페이지에 표현되는 콘텐츠를 작성하게 됩니다.