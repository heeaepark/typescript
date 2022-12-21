// class Person { //클래스는 생성자함수의 다른 형태일 뿐이다.
//   //초기화 메서드
//   constructor(name, age) {
//     console.log('생성 되었습니다.');

//     this.name = name;
//     this.age = age;
//   }
// }

// const Seho = new Person('세호', 30);
// console.log(Seho);


//프로포타입
var user = {
  name: '히밍',
  age: 100,
}
var admin = {};
admin.__proto__ = user; //prototype으로 상속

console.log(admin.name); // 히밍
console.log(admin.age); // 100

admin.role = 'admin' //어드민 프로퍼티 할당
console.log(admin.role); // admin



//자바스크립트와 프로토타입 활용 사례
