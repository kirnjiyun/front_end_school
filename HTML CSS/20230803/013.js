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

// 3. 화살표 함수
// 3.1 return문만 있는 경우
function sum(x, y) {
    return x + y;
}

let sum = (x, y) => x + y

// 3.2 함수의 기능 + return이 있는 경우
function sum(x, y) {
    let z = x + y;
    console.log(z)
    return z;
}

let sum = (x, y) => {
    let z = x + y;
    console.log(z)
    return z;
}

// 3.3 인자가 하나인경우
function pow(x) {
    return x * x;
}

let pow = x => x * x;
let pow = (x) => x * x;

// 4. 즉시 실행 함수
(function () {
    console.log('즉시 실행!')
})()
// 즉시 실행함수는 대부분 main함수로 만들어서 사용하는 경우가 많습니다.

function main() {
    // 10만줄
}
main()

// 즉시 실행함수를 사용하면 main을 다시 사용할 수 없게 할 수 있습니다. 또한 전역변수 등을 사용하지 않게 할 수 있어요.

// 5. 재귀함수(중급자 될때까지 권하지 않습니다.)
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고
// 재귀로 표현이 가능하면 반복문으로 표현이 가능합니다.
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorial(5)
// 5! == 5 * 4 * 3 * 2 * 1

factorial(5) == 5 * factorial(4) == 5 * 24
factorial(4) == 4 * factorial(3) == 4 * 6
factorial(3) == 3 * factorial(2) == 3 * 2
factorial(2) == 2 * factorial(1) == 2 * 1
factorial(1) == 1

// 6. 지역변수 전역변수