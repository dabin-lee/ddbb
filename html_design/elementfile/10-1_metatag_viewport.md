#### @viewport

- VIEWPORT란? : 화면 상의 화상 표시영역을 뜻함.
  - pc와 mobile의 뷰포트는 서로 다름
  - pc : 사용자가 브라우저 창(visiblee area)의 크기를 조절하면서 뷰포트의 크기를 조절 할 수 있다. (스크롤로 나머지를 볼 수 있음)
  - mobile : 웹 브라우저 창(visiblee area)보다 크거나 작을 수 있다. 스크롤바, 창, 크기조절 버튼이 없다. 대신 상하좌우, 더블탭, 확대/축소를 통해 뷰포트 배율을 바꿀 수 있다.

- 뷰포트 크기 조절의 필요성 ? 다양한 디바이스 크기에서도 페이지의 너비나 화면 배율을 설정할 수 있다.

```
<meta name="viewport" content="width=device-width", user-scalable="no", initial-scale=1>
```
|      속성     |           값           |        초기값       |                           특징                          |
|:-------------:|:----------------------:|:-------------------:|:-------------------------------------------------------:|
| width         | <viewport-length>{1,2} | 독자적 속성에 따름. | device-width라는 값을 넣는 것이 가능하다.               |
| height        | <viewport-length>{1,2} | 독자적 속성에 따름  | device-height라는 값을 넣는 것이 가능하다.              |
| user-scalable | no 또는 yes            | yes                 | 사용자가 브라우저의 확대축소를 가능하게 할 것인지 정의. |
| initial-scale | 1부터 10               | 1                   | 초기 확대값                                             |
| minimum-scale | 0부터 10               | .25                 | 최소 확소값                                             |
| initial-scale | 0부터 10               | 1.6                 | 최대 확대값                                             |

---

[meta name="viewport"]
    - 뷰포트 선언

[content="width=device-width"]
  - 컨텐츠를 표현할 너비
  - width속성은 뷰포트의 크기를 조정한다. width = 600등 또는 device-width와 같은 특정 값을 사용할 수 도 있는데, `device-width`는 `100%` 스케일에서 css픽셀들로 계산된 화면의 폭을 의마한다.
    - 높이에 따라서 크기와 위치가 변하는 요소들로 이루어진 페이지는 `height`와 `device-height` 값들을 사용할 수 있다.

[user-scalable="no"]
  - 사용자 단말의 확대기능 (zoom in/out) 사용 유무
  - `user-scalable` 속성은 사용자가 스케일을 조절할 수 있는지의 여부를 지정하며 값으로는 'yes' 또는 'no'를 지정한다 기본값은 'yes'지만, 대부분 'no'를 지정한다.
    - no로 설정 하면 `[input]`필드에 텍스트를 입력할 경우 웹 페이지가 스크롤되는 것을 막아준다.
    - user-scalable을 지정하지 않으면 설정없는 상태로 기본값 'yes'가 적용이 된다.

[initial-scale=1]
  - 초기 화면 크기 설정(기본 꽉찬 화면)
  - 사용자가 너무 극단적으로 화면 축소를 방지한다.
  - 페이지가 처음 로딩될 때 줌 레벨을 조정한다. initial-scale=1는 보여지는 화면의 zoom up 정도를 1배율로 한다는 것으로 100%와 같다. 값을 키우면 보여지는 화면이 줌 되어 크게 보이게 된다.

[minimun-scale=1]
  - 최소 화면 크기 설정 (기본값 : 0.25, 범위 0 ~ 10.0)
  - 페이지가 처음 로딩될 때 줌 레벨을 조정한다. 값이 1일때는 CSS 픽셀과 기기 종속적인 픽셀 간의 1:1 관계를 형성한다.

[maximum-scale=1]
  - 최대 크기 설정 (최대 배율 범위 : 0 ~ 10.0)


[그 외]
  - [target-densitydpi=device-dpi]
    - 모바일 해상도로 맞춰서 보여줌(안드로이드)
  - [apple-mobile-web-app-capable]
    ```
    meta name="apple-mobile-web-app-capable" content="yes"
    ```
    - 웹응용프로그램 전체 화면 작동 유무
    - content = "yes" 전체모드 작동함 / "no" 작동안함
  - [apple-mobile-web-app-status-bar-style]
    ```
    meta name="apple-mobile-web-app-status-bar-style" content="black"
    ```
    - 웹응용프로그램을 위한 상태 막대의 스타일 설정
    - content="black" / "black-translucent" / "black-translucent"
  - [format-detection]
    ```
    meta name="format-detection" content="telephone=no"
    ```
    - IOS 운영체제 / 전화로 호출 링크




- 최근에 만들어진 많은 웹 사이트들은 viewport의 속성을 일일이 지정하지 않고 있다.
복잡한 설정일 수 록 새로운 디바이스 호환성을 고려하지 않을 수 없기 때문에 단순하게 처리하고 있다.

```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
viewport의 width를 디바이스에 맞추고 초기 배율을 1.0으로 지정했으며, 다른설정은 지정하지 않음.
```



<br>
모바일화면을 위해 viewport 사용하기 : https://jongmin92.github.io/2017/02/09/HTML/viewport/
참고 : https://aboooks.tistory.com/352
참고 : https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag


---

