// setTimeout으로 콜백함수가 일정시간 뒤에 실행하도록 코드를 작성합니다. 순서대로 실행되지 않습니다.(비동기적으로 실행). 이러한 비동기 실행 코드는 setInterval, addEventListener 와 같은 함수들이 있습니다.
console.log(1)
setTimeout(
    ()=> console.log(2),100
);
[3,4,5].forEach(i => console.log(i));
console,log(6);