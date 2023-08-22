
// Map의 순환
for (var variable of m) {
  console.log(`m을 순회하고 있습니다. ${variable[0]}`)
  console.log(`m을 순회하고 있습니다. ${variable[1]}`)
}

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());
console.log(m.entries());

// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
[2, 20],
[3, 30],
[4, 40]]);

console.log(temp);
