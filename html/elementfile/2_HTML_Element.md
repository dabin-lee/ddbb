
# HTML Element

## 언어 설정
- <html> 루트 요소에 lang 속성을 사용하여 문서에 주요 사용되는 언어(language)를 설정합니다.
- 사용되는 언어 코드는 ISO 639를 참고하여 언어를 설정합니다.
- 스크린 리더기를 통해서 위와 같은 속성을 읽게 해줌으로써 음성이 어떻게 출력 될지 여부 결정합니다.
  | 언어     | 코드 |
  |----------|------|
  | 한국어   | ko   |
  | 영어     | en   |
  | 일본어   | ja   |
  | 스페인어 | es   |

## 주요 요소's
| Headings   | h1~h6                                 |
|------------|---------------------------------------|
| Paragraphs | p                                     |
| Lists      | dl, ul, ol                            |
| Links      | a, image-map                          |
| Images     | img                                   |
| Tables     | table, tr, th, td, caption, col 등... |
| Forms      | input, select, textarea               |
| address    | address                               |
| structure  | div, span                             |


## 제목과 단락
- `<p>사용자가 가장 많이 읽는 콘텐츠는 단락(Paragraph)입니다.</p>`
- 문장의 단락을 표현하기 위해 사용하며, 새로운 문장을 사용해야 하는 경우 p 태그를 새로 선언하도록 합니다.
- 주로 헤딩 태그와 함께 쓰이곤 하며, 단락(p) 요소는 어휘 콘텐츠(Phrasing Content)만 자식 요소로 허용합니다.

- 사용자가 가장 먼저 읽는 콘텐츠는 제목(Headings Level 1-6)입니다. 제목은 h 요소로 구성됩니다.
- 헤딩 태그는 문서의 주요 타이틀에 사용하며, 중요도가 높은 제목일 수록 낮은 hx 값을 갖습니다.

## alt(alternate text) 속성
- 웹 접근성을 위해 반드시 필요하며 의미없는 이미지인 경우에는 빈 칸, 즉 비워둘 수 있습니다.
- alt 속성을 잘 설정해두면, 시각 장애인이 아니더라도 도움을 받을 수 있습니다. 링크가 깨질 경우등 화면에 alt속성 값이 출력 되어 어떤 이미지인지 정보를 제공 할 수 있습니다.
- title : 이미지가 잘 표현될 경우에 일반 사용자도 대체 텍스트와 같은 내용을 제공해 주고 싶다면 title 속성을 사용할 수 있습니다. title은 마우스 오버할 때 툴팁 효과로 나타내어 집니다. 하지만 alt 속성 자체를 생략할 수는 없습니다.

## alt와 title 속성 비교
1. alt(alternative) : '이미지의 대안, 이미지에 대한 설명'이라고 보시면 됩니다. 용도는
    - ① 인터넷 속도, 또는 컴퓨터 사양 문제로 웹브라우저 설정을 '이미지 출력 안 함'으로 한 사용자에게 이미지에 대한 간략한 설명을 볼 수 있음. (데스크탑이 아닌 모바일기기로 접속시에도 유용함.)
    - ② 시각장애인의 웹서핑시 사용하는 리더(reader) 프로그램이 텍스트는 읽어주나, 이미지는 읽을 수 없으므로 alt태그 안의 설명을 읽어줌.
    - ③ 일반인 웹서핑시 인터넷 접속 등의 문제로 해당 이미지를 불러오지 못했을 때, 배꼽과 함께 이미지 설명을 보여줌.

1. title : 이미지 위에 마우스 포인터를 올려 놓았을 때 풍선 도움말처럼 뜨게 함.
    - ① 이미지뿐 아니라, a태그, span태그, td태그 등 거의 대부분의 태그에 사용할 수 있고, '클릭하시면 다음 사진으로 바뀝니다.' 등의 간단한 풍선도움말 형식을 사용할 수 있음. 특히 웹표준에서는 a태그에 title 속성은 필수항목임. 링크주소에 대한 설명을 넣어, 링크주소에도 의미를 부여할 수 있음.
    - ② 터치스크린 모바일기기에서 웹브라우징시에는 a링크 또는 이미지에 마우스 포인터를 올려놓을 수 없으므로, 한 번 터치시 title내용을 보여주고, 두 번 터치시 해당 링크로 접속이 됨.
    - ③ 일반적인 게시판 리스트 페이지에서 게시물 제목을 일정 길이로 잘랐을 때, title속성에 전체 제목을 넣어주면, 해당 게시물을 클릭할 필요 없이 마우스 오버만으로 전체 제목을 볼 수 있음.


출처: https://bbaksae.tistory.com/25 [QRD]

## figure, figcaption
- figure + figurecaption : `<figure> 요소는 독립적인 콘텐츠를 표현합니다. <figcaption> 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.`
- `<figcaption> 요소는 부모 <figure> 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타냅니다.`
- :heavy_exclamation_mark: 이미지만 사용될 경우는 img 요소만으로 구성하여도 되며, 이미지 + 캡션과 같은 구조일 경우에는 figure, figcaption 요소와 함께 사용하는 것이 좋습니다.

## (Quotation) (cite) (Line Break)
- `<blockquote> 요소는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 인용문의 출처 URL은 cite 특성으로, 출처 텍스트는 <cite> 요소로 제공할 수 있습니다.`
~~~
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierce </p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
~~~
- `<q>요소는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현합니다. <q>는 줄 바꿈이 없는 짧은 경우에 적합합니다.`
~~~
<p>When Dave asks HAL to open the pod bay door, HAL answers:
    <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q>
</p>
~~~
- `<cite> 요소는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.`
~~~
<blockquote>
    <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    <footer>
        First sentence in
        <cite>
            <a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a>
        </cite>
        by George Orwell (Part 1, Chapter 1).
    </footer>
</blockquote>
~~~
- `<br> 요소는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다.`
- 디자인 상에서 라인과 라인의 공간이 크다고 하여 br 을 여러 번 사용하는 것은 옳지 않습니다. br 은 어디까지나 line break 이며, 디자인 요소는 CSS 로 처리하는 것이 바람직합니다.

## 어휘(Phrasing) 요소
- 의미로써의 강조(Semantic) & 표현으로써의 강조(Non-Semantic) : 문맥을 파악하고 의미적 강조인지 표현적 강조인지를 판단하여 마크업을 하는 것이 중요합니다.
- [Semantic]
  - `<strong>` : 강한 강조로 내용의 중요성(importance), 심각성(seriousness), 긴급성(urgency) 을 강조할 경우에 사용/ 중첩이 가능함
    ~~~
    <strong>
        <strong>다이아몬드는 사용하지 마세요</strong>
    그것을 사용하면 폭팔할 것이며,
        <strong>10미터 내에 있는 모든것을 파괴합니다.</strong>
    </strong>
    ~~~
  - `<em>` : (약한) 강조

- [Non-Semantic]
  - `<b>` : 중요성, 관련성 없이 다른 글자와 구분을 목적으로 사용 되는 요소 - 단순히 다른 글자와 구분하기 위한 용도이거나 문서 요약의 주요 단어, 제품 이름 등에 사용
    - 제목은 h1~ h6요소 사용
    - 강조는 em을 사용
    - 중요도는 strong을 사용
    - 표시 또는 강조 표시 텍스트는 mark 사용
    - 이 외에는 `<b>`사용
  - `<i>` : 다른 글자와 구분되는 기술적 용어, 관용구, 생각 등에 사용 되는 요소




출처 : https://developer.mozilla.org/, https://webclub.tistory.com/, https://yamoo9.github.io/front-end-master/
