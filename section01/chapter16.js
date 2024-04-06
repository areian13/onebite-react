// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
};

// animal = { a: 1 }; -> 오류

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "노태윤",
    // 메서드
    sayHi1: () => {
        console.log("안녕!");
    },
    sayHi2() {
        console.log("안녕~");
    },
    sayHi3: function () {
        console.log("안녕..");
    },
};

person.sayHi1();
person.sayHi2();
person.sayHi3();
person["sayHi3"]();

