// 함수
function greeting() {
    console.log("어 왔니?");
}

console.log("호출 전!");
greeting();
console.log("호출 후!");

function getArea(w, h) {
    function another() {
        // 중첩 함수
        console.log("another");
    }
    another();
    let area = w * h;
    return area;
}

let area1 = getArea(30, 20);
console.log(area1);

// 호이스팅
// -> 끌어올리다. 함수 선언문들을 위로 끌어올림
// -> 함수가 최상단에 있지 않아도 됨.