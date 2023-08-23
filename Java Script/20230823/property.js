// prototype
// 우리는 손쉽게 객체를 생산할 수 있지만, 객체의 method를 등록할때마다 새로운 함수를 생성하고 있다.
this.sayYourName = function () {console.log(`my name is ${this.name}! Hello`)}

function NewFactory2(name){
    this.name = name;
}

NewFactory2.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

//100개의 객체를 생성한다면 100개의 함수를 새로 만들고 있는것 이를 해결하기 위해서는 prototype 필요하다.
//prototype은 특정 객체에 대한 참조입니다. 즉 어떠한 공간을 가르키고 있습니다.

//생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 [[Prototype]] 이 존재하게 됩니다.
__proto__
// `__proto__` 프로퍼티는 자신을 만든 생성자 함수의 `prototype`을 참조하는 역할을 합니다. 즉, new 키워드를 통해 생성자 함수의 `prototype`과 인스턴스의 `__proto__` 가 연결됩니다.
function Test(){};

const obj = new Test();

obj.__proto__ === Test.prototype

function Test(){};

const obj = new Test();

console.log(obj.prototype); // undefined
console.log(obj.__proto__ === Test.prototype);  // true 

