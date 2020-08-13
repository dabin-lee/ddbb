

#### @media_query

1. media쿼리란?
    - 다양한 미디어 유형이나 장치에 따라, 서로 다른 스타일 규칙을 적용
        ```
        @media 미디어타입 and (미디어특성){
            css코드
        }
        ```
        ```
        @media screen and (max-width: 1200px){ //뷰포트의 최대 가로 너비 1200px일때 까지
            body{
                color : red;
            }
        }

        @media screen and (max-width: 1200px){ 1200px 이하일때
        @media screen and (min-width: 1200px){ 1200px 이상일때
        @media screen and (orientation : portrait){ //portrait: 세로가 긴형태 (세로가 가로보다 더 긴 상태가 됐을 때)
        ```

        ```
        축약ver ALL
        @media (max-width: 1200px){ // 미디어 타입 생략과 and도 굳이 붙을 필요가 없음
            body{
                color : red;
            }
        }
        ```

2. 미디어 타입 - 생략이 가능함
    | 타입   | 의미                             | 기본값 |
    |--------|----------------------------------|--------|
    | all    | 모든 미디어 타입에 적용          | all    |
    | screen | 컴퓨터 화면, 타블렛, 스마트폰 등 | all    |
    | print  | 인쇄 전용                        | all    |

3. 미디어 특성
    | 특성        | 의미                                                                   |
    |-------------|------------------------------------------------------------------------|
    | width       | 뷰포트 가로 너비                                                       |
    | max-width   | 뷰포트 최대 가로 너비(__이하__) <br> 뷰포트가 설정한 값 이상 커질 수 없다. |
    | min-width   | 뷰포트 최소 가로 너비(__이상__)                                            |
    | height      | 뷰포트 세로 너비                                                       |
    | max-height  | 뷰포트 최대 세로 너비(__이하__)                                            |
    | min-height  | 뷰포트 최소 세로 너비(__이상__)                                            |
    | orientation | 뷰포트 방향 (portrait), (landscape)                                    |
      - orientation
        - portrait -> /* 세로가 길어지는 상태  */ <br>
        - landscape -> /* 가로가 세로보다 길어지는 상태로 변환*/


4. 미디어 옵션 - (grid) options

   - 정해져 있는 내용이 아님 / divece 종류에 따른 단위는 '기획, 디자인' 단게에서 결정하는 것이 효과적이다.
    | 종류          | 디바이스         | 단위(px)    |
    |---------------|------------------|-------------|
    | Large Device  | DesktopS         | 1024px 이상 |
    | Medium Device | Tablets          | 1024px 이하 |
    | Small Device  | Tablets + Phones | 768px 이하  |
 - bootstrap에서 기본적으로 제공하는 device의 grid option : https://getbootstrap.com/docs/4.5/layout/grid/



- `respond.js` : IE 6~8 버전에서 미디어쿼리를 해석할 수 있도록 만들어주는 자바스크립트 라이브러리
- https://offbyone.tistory.com/121