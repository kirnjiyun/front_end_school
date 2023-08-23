class Me{
    constructor(){
        this.name ="지윤"
        this.age="123"
        this.phonenum="010-2121-2121"
        this.address=myaddress
    }
    canWalk(){console.log("i can walk")}
    eat(coffee){coffee.shrink();}
}
class coffee{
    constructor(){this.ml=300}
    shrink(){this.ml--}
}
//인스턴스 만드는 방법은 생성자 함수와 정확히 일치한다

function Slave(이름, 경력) {
    this.이름 = 이름;
    this.경력 = 경력;
    console.log(`새로운 Slave가 도착하였습니다. 집사이름 : ${this.이름} 집사경력 : ${this.경력}`);
}

Slave.prototype.serving = function (lord) {
    lord.CIAO();
}

let 이주연 = new Slave('이주연', 7);



function Lord(name, happy, angry, tired, bored) {
    this.name = name;
    this.happy = happy;
    this.angry = angry;
    this.tired = tired;
    this.bored = bored;

    console.log(`${this.name}주인님의 현재 행복지수는 ${happy}, 짜증지수는 ${angry}, 피곤함은 ${tired}, 지루함은 ${bored} 이렇습니다. 집사는 얼른 맛있는 츄르를 가져다드리세요 `);
}


  // arr 가 hasOwnProperty를 사용할수 있는것은 prototype 을 통해서 상속 받았기 때문!!
    const obj = {
        name: 'test'
    }

    console.log(obj.hasOwnProperty('name'));

    const arr = [1, 2, 3];

    console.log(arr.hasOwnProperty('name'));


    function Parent() {
        this.name = '재현';
    }
    Parent.prototype.rename = function (name) {
        this.name = name;
    }
    Parent.prototype.sayName = function () {
        console.log(this.name);
    }

    function Child() {
        // call 메소드를 통해 Parent의 프로퍼티를 상속받을 수 있습니다.
        Parent.call(this);
        this.newName = '소을';
    }

    // Object.create 메소드를 통해 프로토타입을 연결합니다.
    Child.prototype = Object.create(Parent.prototype);

    // 상속받는 자식만의 메소드나 프로퍼티를 만드는 것도 가능합니다!
    Child.prototype.hello = function () {
        console.log('hello');
    };

    const child = new Child();

    class Robot {
        constructor(name){this.myName =name }
    }
    sayYourName(){console.log(`my name is ${this.name}`)}
    
