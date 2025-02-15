function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
        setTimeout(() => {
            if (typeof num === "number")
                resolve(num + 10);
            else
                reject(`num이 숫자가 아님. num: ${num}`);
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);
    return add10(result); // return하지 않았다면 자동적으로 p객체를 반환함
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})