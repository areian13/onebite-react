console.log(1);

// javascript 엔진은 단일 쓰레드임.
// 그럼 어떻게 비동기 처리를 함?
// 콜백 함수랑 같이 web apis라는거에 대신 비동기 함수를 실행시켜달라 함\
// 사실상 쓰레드 여러개인거랑 똑같은거 아님?
// 그래도 개념은 기억해놓고 있자.
setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);