// 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']
let input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
let output = []
input.forEach(v => {
    output.push(`${v} is good`)
})