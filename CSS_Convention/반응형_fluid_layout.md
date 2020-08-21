* 참고 : 가변그리드 : http://blog.naver.com/PostView.nhn?blogId=syc0821&logNo=221474505823&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView

* 참고 : https://www.youtube.com/watch?v=BTNndpnQFw8



### 가변형 레이아웃 (Fluid Layout)

- 사이트의 모든 요소를 상대적인 크기로 지정해서 브라우저 크기에 따라서 다르게 표시해주는 방법
- 그리드 시스템 : 화면을 몇 개의 column으로 나누어 요소들을 배치하는 것 (그리드를 이용해서 가변형 레이아웃을 많이 씀)

  - __고정형 레이아웃을 가변형으로 만드는 방법__
    - 1. 요소의 너비를 백분율(%)로 바꾸기
      - 소수점 이하 자리가 많다면 한두 자리로 표시하고. 오차를 고려하여 실제 계산한 값보다 약간 작게 지정
    - 2. 패딩과 마진을 백분율(%)로 바꾸기
    - 3. 글자 크기를 em으로 바꾸기
      - 16px = 1em 이기 때문에 (px 값)/ 16 = em값
    - 4. 이미지나 비디오가 있는 경우 크기 조절
      - max-width: 100% 해주면 브라우저 너비를 기준으로 항상 100%에 맞게 이미지 너비가 조절 됨.


- [가변 그리드 공식 이해하기]
  - ( 가변 크기로 만들 박스의 가로 너비 / 가변 크기로 만들 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변 크기의 값

[가변마진]
```
(가변 마진을 적용할 마진값 / 적용할 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변
```

[가변 패딩]
```
( 가변 패딩을 적용할 패딩 값 / 적용할 박스를 감싸고 있는 박스의 가로 너비 ) x 100 = 가변 패딩 값.
```

[가변 폰트크기]
```
( vw, vh, vmin, vmax 단위를 적용할 글자 크깃값 x 브라우저의 너빗값 ) / 100 = 크깃값
```
  - ex) 해상도 너비가 1920 일때 font-size:5vw; 일 때 브라우저에서는 96px 크기 이다.


[비율에 상관없이 가변적인 멀티미디어 요소 만들기]
- 기존의 웹사이트에서는 아무런 문제가 없었지만 브라우저의 비율에 따라 웹사이트의 구조가 늘어나거나 줄어드는 가변형 레이아웃에서 브라우저 너비에 맞게 이미지나 기타 멀티미디어 요소들도 가변적으로 작동하게 만들어 줘야 함.


```
<span style="font-size: 11pt;"><!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width-device-width, initial-scale=1, minimum-scale=1, maxmum-scale=1, user-scalable=no">
  <title>Document</title>
  <style>
 /* @media all and (min-width: 320px){
    body{
      background:red;
    }
  }
  @media all and ( min-width: 768px){
    body{
      background: green;
    }
  }
  @media all and ( min-width: 960px){
    body{
      background: yellow;
    }
    }*/

    *{margin:0; padding: 0; font-size: 100%; }

    #wrap{
      width: 90%;
      margin: 0 auto;
      border: 4px solid #000;
    }
    img, video{
      width: 100%;
      max-width: 100%;
    }
    </style>
  </head>

    <div id="wrap">
      <div><img src="./img/web/visual-new.png" alt="visual-new"></div>
    </div>
</span>
```

```
img,video{
    width:100%;
    max-width:100%;
    }
```




__[가변형 높이값]__

1. 이미지를 만들어서 html과 css에 모두 적용 max-width : "100%;

```
.background {
	width : 100 %;
	height : 0;
	padding-top : calc (300 / 1000 * 100 %); / * calc (이미지 높이 ÷ 이미지 가로 × 100 %) * /
	background : url (bg.jpg) center center / cover no-repeat;
}
```
- 반응형엘리먼트 계산식(‘target / parent value * 100′) 을 이용해도 같은 결과를 얻을 수 있지만,<br> 추후의 유지보수 또는 리뉴얼을 생각한다면 calc() 함수가 훨씬 더 효율적이라는 것을 알 수 있어요~!!



1. 정사각형일때 : padding을 이용하기 padding-top: 100%;
   - cover에 높이가 없는데 padding-top으로 %값 (%는 부모기준) 을 잡는다.
     - 즉 wrapper의 너비를 %로 가져온것이 되고 정사각형이 됨 (100%).
   - wrapper 에 max-width : 960px; / cover { padding-top: 100%; }
2. 원하는 너비, 높이 수로 하고 싶을때 padding-top: 비율계산값;
   - 비율계산 : 박스 높이 % 박스 너비 x 100
   - 750 % 960 x 100 = 78%
   - wrapper 에 max-width : 960px; / cover { padding-top: 78%; }


```

<div class="wrapper">
    <div class="cover">
        <div class="cover-logo">
            <div class="show"></div>
        </div>
    </div>
</div>

<style>
    .wrapper{
        max-width: 960px;
        margin : 0 auto;
    }

    .cover{
        padding-top:78%;
    }
</style>

```
