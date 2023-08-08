//책 보면서 직접 해보는 예제
let numbers=[123,84,816,71,12];
numbers = numbers.map(function(value,index,array){return value*value});
numbers.forEach(console.log);

const num=[0,1,2,3,4,6,7,34,87,22.73]
const evennum=num.filter(function(v){return v%2===0})
console.log(`짝수만 추출:${evennum}`)

let nums=[0,1,2,3,4,5,6,7,8,9]
nums.filter((value)=>value%2===0).map((value)=>value*value).forEach((value)=>{console.log(value)})