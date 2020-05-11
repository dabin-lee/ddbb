# HTML문서 <meta> 요소
- metadata 정의 :  어떤 목적을 가지고 만들어진 데이터 (Constructed data width a purpose)
- `<meta>` 태그는 해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용합니다.
- `<base>, <link>, <script>, <style>, <title>`과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타냅니다.
- 메타관련 요소들을 통해서 제공된 정보는 브라우저나 검색 엔진, 다른 웹 서비스에서 사용하게 됩니다.
- `<meta>` 요소는 언제나 `<head>` 요소 내부에 위치해야 합니다.


---

#### meta 속성
|   속성명   |                              속성값                             |                            설명                            |
|:----------:|:---------------------------------------------------------------:|:----------------------------------------------------------:|
|   charset  |                              문자셋                             |           해당 문서의 문자 인코딩 방식을 명시함.           |
|   content  |                              텍스트                             | name 속성이나 http-equiv 속성과 관련된 값(value)을 명시함. |
| http-equiv |                content-type default-style refresh               |     content 속성에 명시된 값에 대한 HTTP 헤더를 제공함.    |
|    name    | application-name author description generator keywords viewport |              메타데이터를 위한 이름을 명시함.              |


1) 검색 엔진을 위한 키워드(keyword)를 정의하는 예제
`<meta name="keyword" content="HTML, meta, tag, element, reference">`

2) 웹 페이지에 대한 설명(description)을 정의하는 예제
`<meta name="description" content="HTML meta tag page">`

3) 문서의 저자(author)를 정의하는 예제
`<meta name="author" content="TCPSchool">`

4) 5초 뒤에 다른 페이지로 리다이렉트(redirect)시키는 예제
`<meta http-equiv="refresh" content="5;url=http://www.tcpschool.com">`

5) 모든 장치에서 웹 사이트가 잘 보이도록 뷰포트(viewport)를 설정하는 예제
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

#### <head> 안에 배치할 수 있는 요소
- `<title>`
- `<base>`
- `<link>`
- `<style>`
- `<meta>`
- `<script>`
- `<noscript>`
- `<template>`