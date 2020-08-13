const obj = {}; //빈 객체
obj.color = "yellow";
obj["not an identifier"] = 3;

console.log(obj["not an identifier"]);
console.log(obj["color"]);

const Size = Symbol();
obj[Size] = 8;

console.log(obj);
console.log(obj[Size]);
