// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1) {
    console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
    // if (person === undefined || person === null) { // 너무 복잡해짐
    if (!person) { // 따라서 Falsy한 값으로 편하게 작성 가능
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// let person; // undefined
// let person = null; // null
let person = { name: "노태윤" };
printName(person);