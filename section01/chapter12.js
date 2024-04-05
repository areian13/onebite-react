// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();
console.log(varA);

// funcB(); funcB는 선언되지 않음! 지역함수같은 느낌?
let varB = function funcB() {
    console.log("funcB");
}
varB();

// 그렇기 때문에 이름이 필요 없음
let varC = function () {
    console.log("익명함수");
}
varC();

// 이렇게 "함수 표현식"으로 쓰인 애들은 호이스팅이 되지 않음.
// varD(); -> 오류
let varD = function () {
    console.log("호이스팅 안되쥬?");
}

// 2. 화살표 함수
let varE = () => {
    return 1;
}
varE = (value) => value + 1; // 니들이 간단하게 쓴다는게 우린 더 어렵다!
console.log(varE(2));