// 1. 콜백함수
function main(value) {
    console.log(1);
    value();
    console.log(2);
}

function sub() {
    console.log("I am sub");
}

//main(sub);
/* main(() => {
    //console.log("I am sub2");

}); */


// 2. 콜백함수 활용
function repeat(count, callback) {
    for(let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});