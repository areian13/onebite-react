// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

let arrC = [1, 2, 3,
    true, "hello", null, undefined, () => {}, {}, [],
];
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0]; // 0번부터 시작
console.log(item1);

arrC[0] = "hell";
console.log(arrC);