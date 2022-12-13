//Union type
function logMsg2(value: string | number) { // | (파이프라인) 키워드를 이용해서 유니온 타입 지정 string과 number 타입을 허용한다.
  console.log(value);
}
logMsg('hey!');
logMsg(100);
//logMsg(true); // boolean 타입은 허용하지 않아서 문법 오류 뜸




var foo: string | number | boolean; 




//유니온 타입의 장점
function logMsg(value: string | number) { 
  if(typeof value === 'number') {
    console.log(value);
  }
  if(typeof value === 'string'){
    console.log(value);
  }
}

//유니온 타입 특징
interface Developers {
  name: string;
  skill: string;
}
interface Persons {
  name: string;
  age: number;
}
function askSomeone1(someone: Developers | Persons) {
  someone.name;
  //someone.skill 
}
askSomeone1({ name: '개발자', skill: '웹 개발' }); // 인터페이스 Developers의 규격대로 인자 전달
askSomeone1({ name: '히밍', age: 10 }); // 인터페이스 Persons의 규격대로 인자 전달


//인터섹션타입 지정
function askSomeone2(someone: Developers & Persons) {
  someone.name;
  someone.skill;
  someone.age
}
//askSomeone2({ name: '개발자', skill: '웹 개발' }) // 인터페이스 Developers의 규격대로 작성해도 문법 오류가 뜸
askSomeone2({ name: '개발자', skill: '웹 개발', age: 10 }) // Developers와 Persons의 공통 속성 name과 각각의 속성 skill, age를 모두 포함한 규격대로 작성해야 함