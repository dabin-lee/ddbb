## 4가지 경로 표기법

* 절대경로 이미지의 절대적인 경로로 지정하는 방식입니다.
* 상대경로 상대경로는 이미지를 삽입할 HTML 문서를 기준으로 경로를 인식하는 방법입니다.

1. 상대경로

- 상대경로는 이미지를 삽입할 HTML 문서를 기준으로 경로를 인식하는 방법입니다.
이미지 파일이 HTML 문서와 같은 폴더에 있는지, 상위 폴더에 있는지, 하위 폴더에 있는지를 따져보고 경로를 지정해줘야 합니다.
먼저 HTML 문서와 이미지 파일이 같은 폴더에 저장되어 있다면 이미지 파일명만 적어주면 되므로 문제가 되지 않습니다. 그러나 다른 폴더에 있다면 이 다른폴더의 위치를 지정해 주는 방법을 이해해야 합니다.
하위폴더로 이동하는 방법은 하위폴더명를 적어주고 슬래쉬(/)를 입력해 주면 됩니다.
보다 간단하게 설명하기 위해서 html 문서는 index.html이라고 하고, 여기에 삽입해야 할 이미지 파일명은 logo.gif라고 가정하겠습니다.
index.html 파일이 c:home 폴더에 위치하고있고 logo.gif 파일은 c:home 폴더의 하위폴더인 images 폴더에 위치하고 있으면`<img scr="images/logo.gif">`와 같이 지정하면 됩니다. 현재 폴더의 하위폴더인 images 폴더에 logo.gif파일이 위치하고 있다는 표시죠.
상위폴더로 이동하는 방법은 ../ 이와같이 표현합니다.
index.html 파일이 c:home\doc 폴더에 위치하고있고 logo.gif 파일은 c:home\images 폴더에 위치하고 있으면 `<img scr="../images/logo.gif">` 이와 같이 지정합니다.../ 를 통하여 일단 상위폴더로 나간다음(c:\home 폴더) 다시 images 폴더로 들어가는 거죠.

	- 기준 : 현재 웹페이지의 소속 폴더가 기준점 -> '현재 위치한 곳을 기준'
	- . : 현재 웹페이지가 소속된 폴더
	- .. : 현재 웹페이지의 부모 폴더
	- 자식폴더명 : 현재 소속된 폴더의 자식 폴더
	- 현재 위치를 '나'로 기준을 삼고 상대를 찾는 표현

2. 절대경로
- 절대경로는 고유한 경로입니다. 위의 예처럼 http://가 포함되어 있는 절대경로를 경로명만 웹브라우저 주소줄에 입력해도 그 이미지가 그대로 나옵니다. 보통 홈페이지 제작시 자신의 컴퓨터에서 HTML 문서를 만들고 이를 FTP를 통해서 웹서버에 일괄적으로 올립니다. 이런 경우 절대경로로 이미지를 삽입했다면 모두 고쳐줘야 하는 불편이 있습니다. 그래서 일반적으로 절대경로보다는 상대경로를 이용해서 이미지를 삽입하는게 좋습니다.

    - 어떠한 웹사이트나 파일이 가지고 있는 고유한 경로
    - http://www.aaaaa.com ,C:\ds01\201503_현대자동차그룹\35.기아PR사이트 등을 모두 절대 경로
    - 기준 : 누구나 다 알고있는 동일한 위치를 기준으로 상대를 찾는 표현 -> 그 위치 라는 개념
	- '/' 기준 -> '/' 는 웹사이트의 루트 폴더 > "http://localhost:8090"
	- '/WebClientTest' == 'WebContent'

3. 로컬경로
	- 사용 안함
	- 웹서버가 아니라 브라우저가 동작 중인 로컬 컴퓨터의 경로를 탐색

4. 외부경로
	- http:// 시작
	- 남의 사이트 주소
	-

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
     <h1>상대 경로</h1>
     <div><a href ="./ex04.htm">같은 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="ex04.htm">같은 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="./Member/list.htm">자식 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="Member/list.htm">자식 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="./Member/private/private.htm">자식 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="Member/private/private.htm">자식 폴더의 다른 페이지 이동하기</a></div>
     <div><a href ="../필기.txt">프로젝트 루트 폴더의 자원으로 이동</a></div>

     <h1>절대 경로</h1>
     <div><a href ="/WebClientTest/ex01.htm">절대경로</a></div>
     <div><a href ="/WebClientTest/Member/list.htm">절대경로</a></div>
     <div><a href ="/WebClientTest/Member/private/private.htm">절대경로</a></div>
     <div><a href ="/WebClientTest/Member/list.htm">부모폴더의 다른 페이지 이동하기</a></div>

     <h1>로컬 경로</h1>
     <div><a href ="ex01.htm">1번예제 (상대)</a></div>
     <div><a href ="/WebClientTest/ex01.htm">1번예제 (절대)</a></div>
     <div><a href ="C:\Users\user\Desktop\Class\WebClient\WebClientTest\WebContent\ex01.htm">1번예제 (로컬)</a></div>

     <h1>외부 경로</h1>
     <div><a href = "http://naver.com">네이버 이동하기</a></div>
     <div><a href = "http://www.naver.com">네이버 이동하기</a></div>
</body>
</html>
```