function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}
console.log(factorial(5))

function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1

// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());


let array = [100, 200, 300];

function test(a) {
    a[0] = 1000;
}

test(array)
array

let v = 100;

function test(a) {
    a = 1000;
}

test(v)
v

var a = {};
function test(b) {
    b = 1000;
}

test(a)
a
function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
return 승수
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10)
제곱3(10)

const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100


// 비교대상

const xx = 100;

function a() {
  const xx = 1;
  function b() {
      console.log(xx);
  }
  b();
}

a();