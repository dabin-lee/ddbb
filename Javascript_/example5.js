function hello1(name){
    return "hello, world";
}
console.log(hello1, typeof hello1);

const arr = [1, 2, 3];
arr[1] = hello1;
arr[1](); //

console.log(arr, typeof arr);


