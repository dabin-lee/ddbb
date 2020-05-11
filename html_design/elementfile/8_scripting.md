# Script 요소
- script요소는 클라이언트 사이드 스크립트와 같은 프로그래밍 코드를 html 문서 내에 직접 작성하거나 불러올때 사용합니다.
- 어디든 놓일 수 있고, 횟수 또한 제한이 없습니다.
- 외부 스크립트 파일 실행 방법 :
  - async 속성이 명시된 경우 : 브라우저가 페이지를 파싱되는 동안 스크립트가 실행됨.
  - async 속성은 명시되어 있지 않고 defer 속성만 명시된 경우 : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행됨.
  - async 속성과 defer 속성이 모두 명시되어 있지 않은 경우 : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와 바로 실행시킴.
-  HTML5에서는 `<script>` 요소의 xml:space 속성이 더 이상 지원되지 않으며, async 속성이 새롭게 추가되었습니다.
-  이렇게 정의된 자바스크립트는 일반적으로 이미지 조정, 폼(form)에 대한 검증, 콘텐츠의 동적 변경 등에 사용됩니다.

---

### script의 속성
| 속성명    | 속성값      | 설명                                                                                                                             |
|-----------|-------------|----------------------------------------------------------------------------------------------------------------------------------|
| async     | async       | 스크립트가 비동기적으로 실행됨을 명시함.(단, <script> 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있음)                   |
| charset   | 문자셋      | 외부 스크립트 파일에서 사용되는 문자 인코딩 방식을 명시함.(단, <script> 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있음) |
| defer     | defer       | 페이지의 파싱이 모두 끝나면 스크립트가 실행됨을 명시함.(단, <script> 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있음)    |
| src       | URL         | 외부 스크립트 파일의 URL을 명시함.                                                                                               |
| type      | 미디어 타입 | 스크립트의 미디어 타입을 명시함.                                                                                                 |
| xml:space | preserve    | 스크립트 코드 내의 공백 문자(whitespace)의 보존 여부를 명시함. HTML5에서는 더 이상 지원하지 않음.                                |

#### async
-  스크립트가 나머지 페이지와는 비동기적으로 실행됨을 나타내며, 브라우저가 페이지를 파싱하는 동안에도 스크립트가 사용가능해지면 곧바로 실행됨을 명시합니다.
-  ex) `<script src="/examples/scripts/script_async.js" async></script>`
- 이 속성은 `<script>` 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있으므로, src 속성이 명시된 경우에만 사용할 수 있습니다.

#### type
- 스크립트의 유형(스크립트의 MIME 타입)을 나타냅니다. 다음 다섯개의 범주 중 하나에 속할 수 있습니다.
- HTML5에서는 text/javascript가 기본값이므로 스크립트 타입이 이와 같다면 type 속성을 지정하지 않아도 된다. 아래에서 사용가능한 속성값을 나열한다.
    - type="text/javascript"
    - type="text/ecmascript"
    - type="text/vbscript"
    - type="application/javascript"
    - type="application/ecmascript"

#### defer
- 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시합니다.
- defer 속성은 불리언(boolean) 속성으로 명시하지 않으면 false 값을 가지게 되고, 명시하면 true 값을 가지게 됩니다.
- ex) `<script src="/examples/scripts/script_src.js" defer></script>`

#### src
- 외부 스크립트 파일의 URL을 명시함.
- 웹 사이트의 여러 페이지에서 동일한 자바스크립트를 실행할 때 매 페이지마다 동일한 스크립트 코드를 반복하여 추가하는 것보다는 해당 코드를 하나의 외부 자바스크립트 파일(확장자가 .js인 파일)로 생성한 후 `<script>` 요소의 src 속성을 사용하여 참조하는 것이 좋습니다.
- ex) `<script src="/examples/scripts/script_src.js"></script>`

#### charset
- `<script>` 태그의 charset 속성은 외부 스크립트 파일의 문자 인코딩 방식을 명시합니다.
- `<script>` 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있으므로, src 속성이 명시된 경우에만 사용할 수 있습니다.
- ex) `<script src="/examples/scripts/script_charset.js" charset="UTF-8"></script>`

---

# noscript 요소
- noscript 요소는 스크립트 미지원을 표시한다.
- 클라이언트 사이드 스크립트(client-side scripts)를 사용하지 않도록 설정했거나, 스크립트를 지원하지 않는 브라우저를 위한 별도의 콘텐츠를 정의할 수 있습니다.

```
<script type="text/javascript">
    document.write('안녕하십니까?')
</script>
<noscript><p>자바스크립트를 꺼두셨군요.</p></noscript>

js 실행시 : 안녕하십니까?
js 미실행시 : 자바스크립트를 꺼두셨군요.
```

---

# script 태그를 놓는 위치
![scriptimg](../images/script.png)<br>
[브라우저 동작 방식]
1. html을 읽음 ->
2. html 파싱 ->
3. DOM트리 생성 ->
4. Render tree(DOM tree + CSS tree)생성 ->
5. display 표시

<br>

#### 하단에 위치
- 브라우저는 html 태그를 읽어가는 도중 script 를 만나면 파싱을 중단하고 javascript 파일을 로드 후 js코드를 파싱합니다. 결국 에러 발생이나 로딩이 지연된다.
- body 태그 최하단에 위치해야하는 2가지 이유 :
  - HTML을 읽는 과정에서 중간에 스크립트를 만나면 스크립트 로드와 실행을 위해서 중단되는 시점이 생기고, 그에 따라 그 만큼 Display에 표시되는 것이 지연되게 된다.
  - HTML 파싱이 끝나고 DOM 트리가 생기기 전 자바스크립트가 실행되어 DOM 조작을 할 경우 에러가 발생할 수 있다.

#### 현대적인 접근법
- body태그 최하단에 위치하지 않고도 이러한 이유를 방지하기 위해서 사용하는 script 태그의 -> async / defer 속성
![async](../images/script_async.png)
- async 또는 defer 중 어느것을 사용하더라도 HTML 파싱과 스크립트 로드가 동시에 진행되므로 HTML 파싱이 완료되는 시간을 줄일 수 있습니다.
  - defer의 경우에는 실행은 순서대로 실행됩니다.
  - async의 경우에는 HTML 파싱이 끝나지 않더라도 스크립트 로드가 완료되는 즉시 스크립트가 실행됩니다.

---

# MIME
