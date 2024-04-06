// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    // key: value,
    name: "노태윤",
    age: 22,
    hobby: "이어폰 구경",
    job: "백수",
    extra: {},
    10: 30,
    "cute cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // person.name2 -> undefined
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person["kg"] = 200;
console.log(person["kg"]);

// 3.3 프로퍼티를 수정하는 방법
person.job = "학생";
console.log(person.job);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["kg"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);