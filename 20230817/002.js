function myFunc(x,y)
{
    z=x+y;
    return z;
}
console.log(myFunc(3,5));

function 함수이름(parameter1, parameter2...) { // 함수의 선언
    // 실행코드...
    return 반환값
}

함수이름(argument1, argument2...) //함수의 호출

function circleWidth(r){
	let width = r*r*3.14;
	return undefined;
}
document.write(circleWidth(10)); //함수호출

let z = 100;
function sum(x){ //x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; //y는 지역변수
  z = z + y;
  return x + y;
}
document.write(sum(10));//10은 전달인자(argument)
document.write('<br>');
document.write(z);
//키워드로 인해 전역, 지역이 갈리는 것은 아닌지, let, var, const 모두 테스트 필요

function sum(x, y){
    return x + y;
  }
  
  let sumArrowFunction = (x, y) => x + y;
  document.write(sum(10, 20));
  document.write('<br>');
  document.write(sumArrowFunction(10, 20));

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다."); },
    function() { alert("취소 버튼을 누르셨습니다."); }
  );

  // 함수 선언문
function sum(x, y){
    return x + y;
  }
  
  //함수 표현식
  let sumXY = function(x, y){
    return x + y;
  };
  // let x = 10;
  // let y = x;
  let sumXYcopy = sumXY;
  
  document.write(sumXYcopy(10, 20), '<br>');
  
  
  //콜백함수
  function sum(x, y, c){
    c(x + y);
    return x + y;
  }
  
  function documentWrite(s){
    document.write('콜백함수', s);
  }
  
  sum(10, 20, documentWrite);

  