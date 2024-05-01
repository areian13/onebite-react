// 1. 배열의 구조 분해 할당
let arr = [ 1,2,3 ];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 불편하다!

let [ one,two,three ] = arr;
console.log(one, two, three);

// 2. 객체의 구조 분해 할당
let person = {
    name: "노태윤",
    age: 22,
    hobby: "오버워치"
};

let { 
    name,
    age: myAge,
    hobby,
    extra = "hello"
} = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name,age,hobby,extra }) => {
    console.log(name, age, hobby, extra);
}

func(person);