
# CSS 속성 및 분류
* css작성시 작성 순서 고려
    * CSS 에 속성을 선언하는데에는 암묵적·묵시적인 선언 순서가 있습니다. 다시 말해, 속성과 값을 선언하는데 정확한 순서는 없지만 일반적인 컨벤션이 있습니다. 컨벤션이라 함은 관례, 관습의 의미하는데 프로그래밍적으로는 암묵적·묵시적인 개발자 서로 간의 약속과 같은 것을 말합니다.<br>
    <br>
    * 가독성 측면에서 위의 속성들을 큰 흐림에서 작은 흐름으로 작성하실 권장하고 있습니다. 큰 흐름에는 여러가지가 있을 수 있지만 CSS 는 시각적인 표현에 해당하므로 가장 중요한 것이 보이게 하느냐 숨기느냐에 대한 것입니다. 그래서 선언해야될 속성중에 display가 있다면 처음에 display 속성을 먼저 정의하고 순차적으로 일반적으로 배치(레이아웃)에 필요한 속성 순으로 작성하게 됩니다. 그 다음 다자인의 세부적인 제어들을 위한 속성값(보통 레이아웃과 조금 거리가 먼 속성)들의 흐름으로 작성하는 것이 일반적입니다.<br>
    <br>
    * 협업을 하는 작업자 간에도 위 속성들이 큰 틀 안에서 대략적으로 지켜진다면 빠르게 어느 곳에 어떤 CSS 속성값이 정의되어 있는지 예측할 수 있을 것입니다.
    속성의 순서를 지키게되면 코드의 가독성을 높일 수 있습니다.
    <br>
    출처: https://webclub.tistory.com/613?category=690155
    <br>


> ## 1. 레이아웃
> >### 표시	
> >```
> >display, visibility, clip, z-index<br>
> >```
> >### 넘침
> >```
> >verflow, overflow-x, overflow-y<br>
> >```
> >### 흐름	float
> >```
> >float
> >```
> >### 플로팅 레이아웃 (흐름)
> >```
> >float, clear<br>
> >```
> >### 포지셔닝 레이아웃 (위치)	
> >```
> >position, top, right, bottom, left
> >```
> >### 모던 레이아웃(위치)	
> >```
> >flexbox, Multi Columns, Grid
> >```
---
> ## 2. box
> >### 크기	
> >```
> >width, height
> >```
> >### 간격
> >```
> >margin, padding, max-width, padding-top, padding-right, padding-bottom, padding-left, margin, margin-top, margin-right, margin-bottom, margin-left, margin-collapse, margin-top-collapse, margin-right-collapse, margin-bottom-collapse, margin-left-collapse
> >```
---
> ## 3. border/bg
> >### 테두리	
> >```
> >border,border-collapse,border-top,border-right,border-bottom,border-left,border-color,border-image,border-top-color,border-right-color,border-bottom-color,border-left-color,border-spacing,border-style,border-top-style,border-right-style,border-bottom-style,border-left-style,border-width,border-top-width,border-right-width,border-bottom-width,border-left-width,border-radius,border-top-right-radius,border-bottom-right-radius,border-bottom-left-radius,border-top-left-radius,border-radius-topright,border-radius-bottomright,border-radius-bottomleft,border-radius-topleft
> >```
> >### 배경
> >```
> >background, background-attachment,background-color,background-image,background-position,background-repeat,background-size
> >```
---
> ## 4. font
> >### 폰트	
> >```
> >font, font-style, font-variant, font-weight, font-size, line-height, font-family, color, letter-spacing, text-align, text-decoration, text-overflow, text-indent, vertical-align, white-space, word-spacing, ext-size-adjust, text-shadow, text-transform, word-break, word-wrap, font-smoothing, text-rendering, list-style, list-style-type, list-style-position, list-style-image, pointer-events, cursor
> >```
---
> ## 5. etc.
> >### 애니메이션
> >```
> >animation,animation-delay,animation-duration,animation-iteration-count,animation-name,animation-play-state,animation-timing-function,animation-fill-mode,transition,transition-delay,transition-duration,transition-property,transition-timing-function,background-clip,backface-visibility,resize,appearance,user-select,interpolation-mode,direction,marks,page,set-link-source,unicode-bidi,speak
> >```
> >### 기타
> >```
> >content,quotes,outline,outline-offset,opacity,filter,visibility,size,zoom,transform,box-align,box-flex,box-orient,box-pack,box-shadow,box-sizing,table-layout
> >```
