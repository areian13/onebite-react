// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

let result = num + str;
console.log(result);

// 2. 명시적 형변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형변환 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1 + 10);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 10
console.log(strToNum2);

let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + "입니다");