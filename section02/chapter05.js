// 1. Spread 응용 -> 객체 깊은 복사
let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = [...arr1];

console.log(arr1, arr2, arr3);

console.log(arr1 === arr2);
console.log(arr1 === arr3);

console.log(JSON.stringify(arr1) === JSON.stringify(arr3));