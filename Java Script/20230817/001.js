/* this 사용 예시 */

let 호텔 = [{
  '이름' : '하나호텔',
  '위치' : '제주도 제주시 001',
  '가격' : {'A':50000, 'B':30000, 'C':15000},
  '방의개수' : 50,
  '예약자수' : 25,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '둘호텔',
  '위치' : '제주도 제주시 002',
  '가격' : {'A':100000, 'B':60000, 'C':30000},
  '방의개수' : 100,
  '예약자수' : 30,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '셋호텔',
  '위치' : '제주도 제주시 003',
  '가격' : {'A':80000, 'B':50000, 'C':30000},
  '방의개수' : 120,
  '예약자수' : 80,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

var peter = {
    name : 'Peter Parker',
    sayName : function(){    
          console.log(this.name);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  peter.sayName.call(bruce);
  
  // peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.
  var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
          console.log(this.name+ ' is '+ is + ' or ' + is2);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  
  peter.sayName.apply(bruce, ['batman', 'richman']);
  
  /* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
  apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */
  function sayName(){
    console.log(this.name);
  }
  
  var bruce = {
    name: 'bruce',
    sayName : sayName
  }
  
  var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
  }
  
  peter.sayName();
  bruce.sayName();
  
  /* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */