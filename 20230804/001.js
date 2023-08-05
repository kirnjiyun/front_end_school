//조건문 비교하기
const date = new Date()
const hour = date.getHours()
if(hour<11){
    alert('아침 먹을 시간 입니다')
}
else{
    if(hour<15){alert('점심 먹을 시간 입니다')}
    else{alert('저녁 먹을 시간 입니다')}
}

const date = new Date()
const hour = date.getHours()
if(hour<11){alert('아침 먹을 시간 입니다')}
else if (hour<15){alert('점심 먹을 시간 입니다')}
else{alert('저녁 먹을 시간 입니다')}

