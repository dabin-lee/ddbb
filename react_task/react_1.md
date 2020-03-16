1. 클래스를 만드는 것이 아닌 사용하는 것
클래스에 대한 기본적인 정의 : 

리액트는 페이스북의 UI를 더 잘 만들기 위해서 페이스북에서 만든 javascript UI livery

Component : 사용자 정의 태그 <Top></Top> , <sicebar></Sidebar> ex..

1. 가독성
2. 재사용성
3. 유지보수 (개선 이슈 등 모든 태그 동시다발적으로 변경내용 업데이트 훨씬 쉬어짐)



---
2. 개발환경의 종류
🔗 React 공식 홈페이지

1) 온라인 플레이그라운드
웹에서 바로 코딩하여 결과를 확인할 수 있는 사이트
예) CodeSandbox
2) 웹사이트에 React를 추가하기
개발 중에 부분적으로 React를 사용하고 싶은 경우
👉 초급 사용자에게는 까다로운 방법!

3) 새 React 앱 만들기
툴체인(Toolchain)
: 개발에 필요한 도구를 모아둔 것
Create React App
: React 앱을 편리하게 만들 수 있게 도와주는 프로그램


3. npm을 이용해 Create react app 설치

npm이란 ? NPM은 Node Package Manager로 nodejs로 만들어진 앱들의 앱스토어입니다. 
이를 이용해서 쉽게 앱을 검색, 설치, 업데이트, 삭제할 수 있습니다. npm을 설치 전 먼저 node.js를 설치합니다.

Create react app 설치 : https://youtu.be/nvRlr_qPfBc

npm과 npx의 차이 : npm은 프로그램을 설치하는 프로그램 npx는 create react app이라는 프로그램을 인치로 설치해서
딱 한번만 설치하고 지우는 것 (컴퓨터의 공간을 낭비하지 않고, 항상 최신상태이다.)


---

change directory : cd 디렉토리 네임 ( cd Desktop -> cd react-app )
create-react-app . : 현재디렉토리는 . 


---

4. 웹앱 실행
  > npm run start => npm시작
  > ctrl + c => 종료  
  ---
  
  5. JS 코딩하는 법
  ```
  public -> index.html
  index.html -> id="root"
  root안에 
  만든 component들이 root안에 들어갈 수 있도록 create react app 은 설정 되어 있음
  * 개발 작업한 대부분의 file은 scr안에 넣게 될 것임.
  * 반드시 리액트는 하나의 태그 안쪽에 나머지 태그들이 있어야 한다. (가장 밖은 태그가 하나)
  
  ```
  
  6. CSS 코딩
  ```
  src - index.css과 App.css
  import './App.css';와 같은 명령으로 css 파일 삽입
  ```
  
  7. 배포[build]
  ```
npm run build build  - 폴더와 함께 공백이 제거된 파일 생성
👉 용량이 줄어들어 실제 서비스에 적합
npx serve -s build : build 폴더를 document root로 설정