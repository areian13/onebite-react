// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코ㅠㅡ
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    // 함수 내에서 지역 스코프 선언 -> 밖에서 호출 x
    function funcB() {}
}

funcA();
//console.log(b);

if (true) {
    let c = 1; // 지역

    // 지역 스코프 선언했는데 밖에서 호출 o
    function funcB() {}
}

for(let i = 0; i < 10; i++) {
    let d = 1;

    function funcC() {} // 얘도;;
}
// console.log(c, d);
funcC();