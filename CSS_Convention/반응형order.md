```
<div class="sign-group float--right toggle">
    <div class="btn-group">
        <a class="btn sign-in" href="#">Sign in</a>
        <a class="btn btn--primary sign-up" href="#">Sign up</a>
    </div>

    <form id="search-form" method="post" action="">
        <input id="search" class="input--text" type="text" placeholder="Search GitHub">
        <input type="submit">
    </form>

    <ul class="sub-menu">
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
    </ul>
</div>
```
- header의 오른쪽 컨텐츠 구조가 다른이유?
    - (반응형 줄여진 화면에서 버튼 - 검색 - 메뉴(위에서 아래 순서)로 위치되어 있음. 이럴경우 마크업 또한 기본적으로 위에서 부터 아래로 떨어지는 구조로 잡아야 한다. 추후 css 데스크톱 버전에서 order로 순서를 바꿔준다.

```
header .btn-group{
    order :2;
    display: flex;
}
#search-form{
    margin-right: 10px;
    order : 1;
}
```