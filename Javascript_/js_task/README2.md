비동기 처리방식
promise : 응ㅇ답을 보내주면 한다.
closer
이터레이터
인스턴스

14.3.3 이벤트 (실제 타이핑 후 왜 실행이 안되는지?)



비동기처리를 간결하게 작성하는 Promise


이터레이터 iterator (반복)
- next, done 프로퍼티 사용
- 모두 독립적임
- 새 이터레이터를 만들 때마다 처음에서 시작한다.
-


제너레이터 :
자신의 실행을 제어하는 함수.
동작을 기다리게 할 수 있다.
- 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어
- 실행 중인 함수와 통신한다는 것


 - 만들 때 ㅣ: function 키워드 뒤에 (*)애스터리스크를 붙임



---






- [이터레이터 프로토콜]
  - 이터레이터는 '반복자'라는 의미
  - iterable(순회가능한 자료구조)의 요소를 탐색하기 위한 포인터로서 next()함수를 가지고 있다.
  - 컬렉션을 반복할 수 있게 하는 객체 이다.
  - array, string, map, set, dom 이 이터러블이고, 이런것을 반복할 수 있게 하는 것이 이터레이터다.


- 1. iterator
    - 어떤 자료구조를 순회하는데 쓰이는 pointer라고 생각
    - next() method : 이터러블(Iterable, 순회 가능한 자료구조)의 요소를 탐색하기 위한 포인터


구현되어 있으면 iterator
    - 반복 가능한 객체의 값을 Sequence(시퀀스)대로 처리하는 프로토콜
    - 컬렉션 내 항목에 대해 한번에 하나씩 접근하고 현재의 위치를 추척하는 방법을 알고 있는 객체
    - 반복 가능 인터페이스에 의해 반환되는 객체

```
const iterator1 = {data, index, = 0} => ({
    next : () => ({ value : data[index++], done : index > data.lenght})
})
```




- 2. iterable

  - iterables 객체 [반복가능한 (순회가능한) 객체]
      - iterable 프로토콜은 반복 가능한 객체를 나타내는 프로토콜로
      - for..of등에서 반복되는 행동을 정의하는 객체를 반복 가능 하다고 한다.
      - array, map, set, string 등이 반복 가능한 내장 객체이고 또한 Symbol.iterator 라는 키를 가진다.
```
const iterator = [1, 2, 3][Symbol.iterator]();

iterator.next().value; //1
iterator.next().value; //2
iterator.next().value; //3
iterator.next().value; //true
```
    - 반복가능한 객체를 만들기 위해서 Symbol.iterator라는 키에
      - next()라는 메소드를 가지는 객체를 반환하는 함수를 할당하고,
      - 이 함수의 반환값은 value 프로퍼티를 가진 객체이다.



- 3. iterators that are iterable
- 4. well-formed iterable

