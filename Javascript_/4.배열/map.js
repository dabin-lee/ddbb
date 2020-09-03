const soju = [
    {
        "type" : "소주",
        "name" : "참이슬",
        "ml": 360,
        "alcohol": "strong",
        "image": "../img/blue_s.png"
    },
    {
        "type" : "소주",
        "name" : "처음처럼",
        "ml": 360,
        "alcohol": "nomal",
        "image": "../img/blue_s.png"
    }
];


// 1. 문자열 출력
const texts = soju.map(item => item.alcohol); //map함수의 파라미터는 각 아이템을 가르킨다.
console.log(texts); //strong, nomal


// 2. (특정항목) 배열안에서 원하는 항목 출력
const superheros = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];
const index = superheros.indexOf('토르');
console.log(index);