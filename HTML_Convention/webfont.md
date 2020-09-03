#### webfont
- 로컬의 폰트 설치 상황과 관계없이, 특정 서버에 업로드 된 폰트파일을 다운로드한 후 화면에 표시하는 방법
- 웹 폰트를 사용하면 사용pc의 해당 폰트의 유무와 상관 없이 webfont로 설정 된 폰트가 노출된다.
- 모든 브라우저가 웹 폰트를 지원하고 있다.
- 사용자의 환경에 구애받지 않고 최적의 사용자 경험(ux)를 제공하기 위해서 사용하게 된 기술이다.

##### @font-face
1. syntax
  ```
  @font-face {
  font-family: <a-remote-font-name>;
  src: <source> [,<source>]*;
        [font-weight: <weight>];
        [font-style: <style>];
    }
  ```
<br>

2. value
   - `<a-remote-font-name>` : font속성에서 폰트명(font-face)로 지정될 이름을 설정한다.
   -`<source>`: 원격 폰트(remote font)파일의 위치를 나타내는 URL값을 지정하거나, 사용자 컴퓨터에 설치된 폰트명을 local("Font Name")형식으로 지정하는 속성이다.
   - `<font-weight>`
   - `<font-style>`
   - 사용자의 로컬환경(local computer)에 설치된 폰트는 local() 이라는 구문을 사용하여 지정이 가능하다. 만약 해당 폰트를 찾지못한다면, 다른 대체 폰트를 찾을때까지 폰트를 검색작업을 계속 할 것이다.
<br>

3. role
  ```
  @font-face {
  font-family: 'Awesome Font';
  src: local('Awesome Font'),
      url('/fonts/awesome.woff2') format('woff2'),
      url('/fonts/awesome.woff') format('woff'),
      url('/fonts/awesome.ttf') format('truetype'),
      url('/fonts/awesome.eot') format('embedded-opentype');
  }

  .title {
      font-family: 'Awesome Font', AppleSDGothicNeo, sans-serif;
  }
  ```
   - src에 존재하는 폰트들을 순서대로 로드하면서 현재 브라우저에서 사용 가능하거나, 정상적으로 로드 된 폰트를 적용한다.
   - 네트워크로부터 폰트가 다운이 되기때문에 local을 먼저 앞에 선언해서 시스템에 있는 것을 쓰도록 한다.
<br>

4. format
   - 마지막 폰트만 지원되는 브라우저의 경우, 순서대로 로드 된 폰트들이 불필요하다. format 속성을 사용하면 브라우저에서 지원 가능한 파일만 다운로드 받을 수 있다. 즉  브라우저에게 미리 알려주는 역할을 한다.
   - 예를 들어 CSS의 Vender prefix의 기능
   - 크롬에서는 `.eot` 형식이 지원이 되지 않는다. 그렇기에 로드 자체를 하지 않는다.
   - format 파일 형식
    - `.woff` - format : “woff” / browser : Chrome, Safari, Opera Mobile, Firefox, iE 9+
    - `.ttf` - format : “truetype” / browser : Chrome, Safari, Opera Mobile, Firefox, iE 9+
    - `.ttf, otf` - format : “opentype” 
    - `.eot` - format : “embedded-opentype” / browser : ie8 이하 버전
    - `.svg, .svgz` - format : “svg” / browser : Chrome, Safari, Opera, Opera Mobile, Safari Mobile
<br>
5. 브라우저별 대응 방법
   - 서체 파일을 명시하는 순서가 아주 중요하다.
   - 서체 파일의 순서는 .eot, .woff, ttf, .svg 의 순 (파일 크기가 작은 순서부터)
   - IE 6~11 : .eot 파일만 지원
   - IE9+, Chrome, Safari, Opera : WOFF파일 지원
   - IE8이하나 구 모바일 브라우저를 지원하지 않는다면 svg나 eot를 지원해줄 필요는 없다.
   - local(※) 값은 외부 자원을 참조하기 이전에 시스템에 설치된 글꼴을 우선 참조할 수 있도록 만들어 준다.
   - 브라우저별 지원 여부 확인
   -  .woff (웹 페이지에서 사용하기 위한 글꼴) : https://caniuse.com/#feat=woff
   -  .ttf (애플과 마이크로소프트가 개발한 표준 글꼴) : https://caniuse.com/#feat=ttf
   -  .eot (웹에 포함된 글꼴을 사용할 수 있도록) : https://caniuse.com/#feat=eot
   -  .svg, .svgz (품질 유지를 위한 벡터 그래픽 / 파일 크기가 크다.) : https://caniuse.com/#feat=svg


---


##### @구글 CDN (Contents Delivery Network)
   - 별도의 @font-face를 정의하지 않아도 되기 때문에 편리하다.
   - 서버에 직접 업로드 하는 것보다 속도가 느린부분과 구글 CDN 서버가 제대로 동작하지 않을 때 웹 폰트를 제공받을 수 없다.
   - WOFF와 WOFF2만 지원하기때문에 IE6~8, IE호환성 모드에서는 웹폰트를 사용 할 수 없다.
   - 서버가 있다면 직접 서버에 업로드하여 사용하는 것이 좋다.
   - IE는 font-display 속성을 지원하지 않는다.
   - [load 하기]
   - HEAD 파일에서 CSS보다 더 빠르게 로드해야한다.
   - 적은폰트를 로드해야 한다.
   - 로딩 시간을 줄이기 위해 표제를 위한 Bold와 가독성이 좋은 폰트 (최대 2가지)를 선정하는 것이 좋다.
   - 폰트 로드 코드를 결합해서 사용한다.

```
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet">
```
1. font-display 속성
   - font-display: auto | block | swap | fallback | optional;
   - auto: 브라우저의 기본 동작을 따른다.
   - block: (FOIT 렌더링) 타임아웃까지 텍스트를 보여주지 않음 (3s)
   - swap: (FOUT 렌더링) 응답이 올때까지 기다리고 그 전 까지 기본 폰트 제공.
   - fallback: 100ms 동안은 텍스트를 렌더링 하지 않고, 그 후 폴백 폰트로 렌더링 한다. 그리고 약 2초 이내에 웹 폰트 다운로드가 완료되면 웹 폰트로 렌더링 한다. 하지만 2초 이내에 로딩이 완료되지 않으면 계속 폴백 함수로 렌더링 된다.
   - optional: fallback과 유사하게 동작한다. 다만, 웹폰트 로딩이 완료되었을 때 네트워크 상태에 따라 웹폰트와 폴백 폰트 중 한 가지를 골라 렌더링 한다.

---

##### 웹 폰트 최적화
1. 참고문서 읽어보기
- http://www.beautifulcss.com/archives/431
- https://wit.nts-corp.com/2017/02/13/4258
- https://d2.naver.com/helloworld/4969726
- https://showerbugs.github.io/2018-02-02/%EC%9B%B9%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0
- https://armadillo-dev.github.io/html/css/webfont-optimize/

2. 웹 폰트 렌더링
- iE : FOUT / 그 외 브라우저 : FOIT
-  FOUT(flash of unstyled text) - 웹 폰트가 적용된 부분은 여백으로 처리, 로딩이 완료되면 해당 폰트를 제공한다. 단 3초의 제한 시간으로 넘어가면 fallback으로 렌더링 한다.
-  FOIT(flash of invisible text) - fallback으로 먼저 표시하고, 웹 폰트 로딩이 완료되면 해당 폰트 적용한다.


