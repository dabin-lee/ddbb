
<!-- 비구조화 할당 destructuring assignment -->

## array - 

```
const animalList = ["CAT", "DOG", "TIGER"];
const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

👇👇👇👇👇👇👇👇👇👇

const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat); //CAT
console.log(dog); //DOG
console.log(tiger); //TIGER

```