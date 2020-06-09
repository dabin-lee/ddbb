querySelector()
getElemnetById()



-  Element.querySelector() <주요>
DOM을 찾는데 특히 유용한 querySelector 메서드입니다.
CSS 스타일을 결정할 때 사용하던, Selector 문법을 활용해 DOM에 접근할 수 있습니다.
DOM을 찾을 때 querySelector만 써도 충분하고 빠릅니다.



- querySelector와 querySelectorAll의 차이
```
반환하는 요소가 한개이냐 여러개이냐의 차이이다.
querySelector의 경우, 선택자가 선택하는 요소의 첫번째 요소를 반환하고, querySelectorAll의 경우 모든 요소(NodeList)를 반환한다.

CSS선택자를 사용하면 기존의 DOM API보다 편리하기 DOM객체에 접근할 수 있다.
하지만 속도 면에서는 기존의 DOM API가 훨씬 빠르기 때문에, 사용할때 한번 더 고민해볼 필요가 있다.

(getElementById가 querySelector보다 성능이 더 뛰어남)
```