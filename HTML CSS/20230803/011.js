// 함수의 종류
// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
// 1. 함수 선언문
function sum(x, y) {
    return x + y;
}

// 2. 함수 표현식
let sumXY = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));