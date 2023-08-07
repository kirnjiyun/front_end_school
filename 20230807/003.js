
// forEach(콜백함수)
let arr = [10, 20, 30, 40, 50]
arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let arr = [10, 20, 30, 40, 50]
let sum = 0;
arr.forEach(v => {
    sum += v
})
console.log(sum)

// 문제2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
let arr = [10, '20', 30, '40', 50]
let sum = 0;
arr.forEach(v => {
    sum += parseInt(v)
})
console.log(sum)

// 문제2. forEach를 사용해서 짝수 인덱스의 값을 모두 더하세요.
// 풀이1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
arr.forEach((v, i) => {
    if (i % 2 === 0) {
        sum += v
    }
})
console.log(sum)

// 풀이2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
arr.forEach((v, i) => {
    i % 2 === 0 ? sum += v : null
})
console.log(sum)

// Array(100).fill(0)와 같은 코드 대신 뒤에서 배울 map을 더 많이 사용합니다.
// 문제3. 1부터 100까지의 숫자를 다 더해주세요.
Array(100).fill(0).forEach((v, i) => {
    console.log(i+1)
})

let sum = 0;
Array(100).fill(0).forEach((v, i) => {
    sum += i+1
})
sum // 5050, 수학 수식으로 계산되는 코드는 이렇게 순회를 돌면서 풀지 않으셔도 됩니다.

// let n = 100
// n * (n + 1) / 2


// https://school.programmers.co.kr/learn/courses/30/lessons/120835
let userInput = [3, 76, 24]
let sortValue = userInput.sort((a, b) => b - a)

// 한글 풀이
// userInput = [3, 76, 24]라면 정렬된 후의 값은 [76, 24, 3]이 됩니다. 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 됩니다. 76이 위치한 인덱스는 0이 됩니다. 24가 위치한 인덱스는 1이 됩니다.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정합니다. 그러면 userInput은 [2, 0, 1]이 됩니다.
// 결과값을 보니 0번째는 없습니다. 따라서 여기에 1씩 더해줍니다. [3, 1, 2]가 됩니다.










// 주의사항
// forEach는 return을 사용할 수 없습니다.
// forEach는 break, continue를 사용할 수 없습니다.
// ElemetnNodeList는 forEach를 사용할 수 없습니다.