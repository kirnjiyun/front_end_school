const todo=['눈썹정리','방청소하기','sqld 공부하기']
for(const i in todo){console.log(`${i}번째 할 일: ${todo[i]}`)}
const todo=['눈썹정리','방청소하기','sqld 공부하기']
for(const thing of todo){console.log(`할일:${thing}`)}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

let output=0
for (let index = 1; index < 101; index++) {
    output+=index
    
}
console.log(`1~100더한 값은 ${output}입니다.`)

let op=0

for (let i =1; i<=10; i++){
    if(i%2===1){continue}op+=i
}
alert(op)

let star=''
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++){
        star +='*'
    }
    star += '\n'
}
console.log(star)