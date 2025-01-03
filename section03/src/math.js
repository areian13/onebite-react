// math 모듈

function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

export { add };



// Common js 방식.
// module.exports = {
//     add: add,
//     sub, // key == value일 때 생략 가능
// };