// 단락 평가
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}
console.log(returnFalse() && returnTrue()); // -> False 함수, false
console.log(returnTrue() && returnFalse()); // -> True 함수, False 함수, false

console.log(returnTrue() || returnFalse()); // -> True 함수, true;
console.log(returnFalse() || returnTrue()); // -> False 함수, True 함수, true

// Trusy, Falsy한 값 호출 시, 마지막 호출값 그대로가 사용됨
console.log(undefined || null); // null
console.log(null || undefined); // undefined

console.log([] && 10); // 10
console.log([] || 10); // []

// 단락 평가 활용
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "노태윤" });