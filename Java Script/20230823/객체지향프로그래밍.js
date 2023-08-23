// 객체지향은 프로그래밍 방법론 중 하나로, 프로그램을 작성할 때 객체를 만들어 서로 소통하는 방법이다. 객체와 객체가 서로 메소드를 통해 상호작용하게 하는 것
//자바스크립트 객체가 키, 값 쌍으로 이루어진 데이터의 묶음이라면, 객체 지향의 객체는 우리가 표현하고자 하는 구체적인 사물을 추상적으로 표현한 것이다.
//생성자란 객체를 만들 때 new 연산자와함께 사용하는 함수이다.
let myArr = new Array(1,2,3);
let myArr2 = new Array(4,5,6);

myArr2.length
myArr.length

myArr.forEach(item=>{
    console.log(item);
})

myArr2.forEach(item => {
    console.log(item);
})

//생성자 함수를 만들기 위해 기본적으로 함수가 필요하다.
function Factory(){}
//new 키워드를 통해 객체를 생성한다.
function Factory(){}
let robot1 = new Factory();
//생성자 함수와 객체의 관계는 instanceof로 확인한다
robot1 instanceof Factory

function NewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

//인스턴스 생성하기
let robot1 = new NewFactory('브랜든');


//음식 이름을 배열로 놓고 랜덤하게 음식 뽑기

function Lunch(foodNames){
    this.menu = foodNames
}

const todaymenu = new lunch(['초밥','마제소바','햄버거'])

Lunch.prototype.sayMenu = function(){
    const index = parseInt(Math.random() * this.menu.length);
    console.log(`삐리비리비리 오늘의 메뉴는! ${this.menu[index]}`);
}

//우리가 필요할때 사용할 수 있는 우리만의 객체를 만들어서 사용할 수 있도록 도와주는 것이 생성자이다.
