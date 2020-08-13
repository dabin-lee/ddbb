* 참고 : 가변그리드 : http://blog.naver.com/PostView.nhn?blogId=syc0821&logNo=221474505823&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView





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




[비율 계산]

1. 가변 그리드 (해당 박스)
   - 모든 단위를 px에서 %로 바꿈
   - 해당(가변박스 가로 너비) % 전체박스 (가변 박스 감싸는 박스) x 100 = 가변 크기의 값

2. 마진
   - (가변마진 적용값 % 적용 박스 가로 너비) x 100
    ```
    <div id = "wrap">
        <div class="in"></div>
        <div></div>
    </div>

    #wrap{
        width: 90%; //전체
        height: 500px;
        margin 0 auto;
    }
    #wrap div:first-child{
        margin-right:
    }
    ```



