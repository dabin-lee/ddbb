
### 사용 전 필독! Tagged Template Literal
    - 문자열 조합을 더욱 쉽게 할 수 있게 해주는 ES6 문법

```
var str = 'Hello ES6'
👇
const str = `Hello ES6`;
```
- 기존에는 var str = 'Hello ES6'와 같은 방식으로 사용하였으나 ES6에서는 백틱(back-tick)이라는 기호(`)를 사용하여 정의


```
const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

console.log(template);
```
- 템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.

```
var str = 'Template literals are string literals allowing embedded expressions. \n' +
'You can use multi-line strings and string interpolation features with them. \n' +
'They were called "template strings" in prior editions of the ES2015 specification.';
👇
const str = `Template literals are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.
They were called "template strings" in prior editions of the ES2015 specification.`;
```
- 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백(white-space)를 표현하기 위해서는 백슬래시(\)로 시작하는 이스케이프 시퀀스(Escape Sequence)를 사용하여야 한다. <br>
   ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용된다.

```
const first = 'Ung-mo';
const last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');
// "My name is Ung-mo Lee."
👇
// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`);
// "My name is Ung-mo Lee."
```
- 템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 이를 문자열 인터폴레이션(String Interpolation)이라 한다.


```
console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
```
- 문자열 인터폴레이션은 ${ … }으로 표현식을 감싼다. 문자열 인터폴레이션 내의 표현식은 문자열로 강제 타입 변환된다.

```
var language = 'Javascript';
var expression = 'I love ' + language + '!';
console.log(expression); // I love Javascript!
👇
var language = 'Javascript';
var expression = `I love ${language}!`;
console.log(expression); // I love Javascript!
```
- 위와 같이 문자열에 특정 변수의 값을 함께 사용하려면 +를 이용하여 문자열 중간에 해당 변수를 연결해줘야 했다.
ES6에서는 템플릿 리터럴을 이용하면 아래와 같이 간편하게 문자열과 변수를 함께 사용할 수 있다.
${}를 이용하면 위와 같이 변수의 값을 대입할 수 있을 뿐만 아니라 간단한 연산도 할 수 있다.



출처 : https://poiemaweb.com/es6-template-literals