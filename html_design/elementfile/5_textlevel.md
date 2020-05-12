
# 텍스트 레벨(Text level) 요소들
- 선적인것을 표현하는 Element로서 행안의 일부라는 의미한다.

#### `<sup></sup>`
- 윗첨자 (superscript) 텍스트 표현 요소
- `<sup>` 요소 내부의 텍스트는 일반 텍스트 라인보다 윗쪽에 절반 크기의 작은 문자로 표현되며, 이러한 윗첨자는 수학 공식(ex) (a+b)2 = a2 + 2ab + b2)이나 각주(ex) WWW[1]) 등을 표현할 수 있습니다.
- ex) `<p>(a+b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></p>`
- ![img_1](../images/sup.png)

#### `<sub></sub>`
- 아랫첨자(subscript) 텍스트 표현 요소
- <sub> 요소 내부의 텍스트는 일반 텍스트 라인보다 아래쪽에 절반 크기의 작은 문자로 표현되며, 이러한 아랫첨자는 수학 공식(ex) nPr = n!/(n-r)!)이나 분자식, 화학 반응식(ex) 2H2 + O2 → 2H2O) 등을 표현할 수 있습니다.
- ex) `<p>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p>`
- ![img_1](../images/sub.png)

#### `<abbr></abbr>`
- 축약(abbreviation) 요소
- `<abbr>` 태그는 “W3C”, “HTML”, “ASAP” 등과 같이 단어의 축약형(abbreviation)이나 머리글자로만 된 단어(acronym)를 정의할 때 사용합니다.
- 브라우저나 번역 시스템, 검색 엔진에게 유용한 정보를 줄 수 있습니다.
- 요소 위에 마우스를 올려놓으면 title 속성으로 명시한 단어의 원형이 나타납니다.
- 속성 - title : 약어 전체의 의미를 지정합니다. (요소에 마우스를 올리면 툴팁으로 나옴)
- ex) `<p><abbr title="International Olympic Committee">IOC</abbr> (국제 올림픽 위원회)는 스위스 로잔에 본부를 둔 국제 스포츠 기구이다.</p>`
- ![img_1](../images/abbr.png)

#### `<s></s>`
-  태그는 텍스트 한가운데 라인(line)을 추가하여 더 이상 정확하지 않거나 관련이 없는 텍스트를 표현할 때 사용합니다.
-  `<s>` 요소를 사용하여 문서에서 대체되거나 삭제된 텍스트를 표현해서는 안 되며, 해당 텍스트는 `<del>` 요소를 사용해서 표현해야만 합니다.
- ex) `<p><s>기간한정판매 : 1일부터 3일까지 무려 50% 세일에 들어갑니다!!</s></p> <p>판매완료!</p>`
- ![img_1](../images/s.png)

#### `<mark></mark>`
- 관련 참조 목적의 하이라이트된 글자 요소
- `<mark>` 태그는 형광펜으로 칠한 것처럼 하이라이트된(highlighted) 텍스트를 정의할 때 사용합니다.
- ![img_1](../images/mark.png)

#### `<time></time>`
- 사람이 읽을 수 있는 (human- readable) 형태의 날짜와 시간 데이터를 정의할 때 사용합니다.
-  날짜와 시간 데이터를 기계가 읽을 수 있는(machine-readable) 형태로 변환해주는 datetime 속성을 포함할 수 있습니다
-  datetime 속성으로 쓸 수 있는 형태
   -  `<time datetime="YYYY-MM-DDThh:mm:ssTZD"></time>`
   -  YYYY-MM-DD 연도-월-일
   -  T - 시간(HH)을 지정한 경우는 필수
   -  HH:mm:ss-TZD - 시간:분:초:시간대부호
- ex) `<p>이번 콘서트는 <time datetime="2019-04-19T20:00:00">4월 19일 저녁 8시</time>부터 시작합니다.</p>`
- ![img_1](../images/time.png)

#### `<small></small>`
- 저작권, 법적 텍스트, 주석 및 작은 글씨 요소
- 글자 크기가 작은 텍스트를 정의할 때 사용합니다.
- ex) `<p>이 텍스트는 일반적인 크기의 텍스트입니다.</p>    <p><small>이 텍스트는 크기가 작은 텍스트입니다.</small></p>`
- ![img_1](../images/small.png)

#### `<ins></ins>` 
- 내용의 추가를 의미하는 태그 - 문서에 추가된 텍스트를 표현할 때 사용합니다.
- `<ins>` 태그는 텍스트 아래쪽에 라인(line)을 추가하여 문서에 추가된 텍스트를 표현할 때 사용합니다.

#### `<del></del>`
- 태그는 내용의 삭제를 의미하는 태그
-  `<del>` 태그는 내용 자체가 눈에 보이지 않게 하는 게 아니라 가로줄을 그어 삭제된 내용임을 표시합니다.
- 이와 같이 `<del>` 요소와 `<ins>` 요소는 문서에 대한 업데이트나 수정을 표현할 때 사용하며, <br> 브라우저는 이를 일반 텍스트에 라인을 추가하는 것으로 표현할 것입니다.
- ![img_1](../images/insdel.png)
- ![img_2](../images/insdel2.png)

<br>

출처: https://webclub.tistory.com/610?category=724656 [Web Club] <br>
출처: https://http://tcpschool.com/
