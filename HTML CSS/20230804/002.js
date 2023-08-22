const input  =Number(prompt('숫자를 입력하세요.','숫자'))
switch (input%2){
    case 0:
        console.log('짝수입니다.')
        break
    case 1:
        console.log('홀수입니다.')
        break
}

const date= new Date()
const hour= date.getHours()

switch (true){
    case hour<11:
        alert('아침 먹을 시간입니다.')
        break
    case hour<15:
        alert('점심 먹을 시간입니다.')
        break
    default:
        alert('저녁 먹을 시간입니다.')
        break
}

const input=prompt('숫자를 입력해주세요','')
const number=Number(input)
const result=(number>=0)?'0 이상의 숫자입니다.':'0보다 작은 숫자입니다.'

const items=['asdfa','asdfs','sdgg','gg']
const index = items.indexOf('')