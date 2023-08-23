console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Number.prototype.__proto__ === Object.prototype);
console.log(String.prototype.__proto__ === Object.prototype);
console.log(Math.__proto__ === Object.prototype);

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
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype); // 지정된 프로토타입 객체를 갖는 새 객체를 만듭니다.


Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}

//위의 코드에서 call 함수는 Child 함수의 this가 Parent 생성자 함수의 this를 바라보게 만듭니다. 즉, Child 를 통해 생성된 인스턴스의 this 가 Parent 함수안의 프로퍼티에 접근할 수 있게합니다.

//그리고 Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다. 즉 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하게 합니다.

//위의 두 가지  과정을 통해 Child 객체는 Parent 객체의 모든 것을 상속받게 됩니다.

//이렇게 prototype을 이용해 메소드를 인스턴스들이 공유하도록 하여 메모리 공간을 절약할 수 있었습니다.