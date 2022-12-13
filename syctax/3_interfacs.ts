interface User {
  age: number;
  name: string;
}
const heeming: User = {
  age: 100,
  name: '히밍',
}


//함수의 인자를 정의하는 인터페이스
function getUser(user: User) {//인자의 데이터 타입을 제한하여 interface User의 데이터 구조만 인자로 받도록 함 
  console.log(user);
}
const bill = {
  name: '빌'
}
const steve = {
  age: 56,
  name: '스티브'
}
//getUser(bill); //age 프로퍼티가 존재하지 않는 구조이므로 문법 오류가 뜸
getUser(steve)



//함수 구조를 정의하는 인터페이스
interface SumFunc { // sum 함수를 만들기 전 데이터 타입을 정의할 interface 선언
  (a: number, b:number): number; //인자와 리턴값의 데이터 타입을 정의
}
const sumNum: SumFunc = function (a: number, b: number) {
  return a + b;
}
var result = sumNum(1,2);
console.log(result); // 3 출력


//예제2
interface Student {
  readonly studentId: number // readonly 속성을 통해 프로퍼티 값을 수정할 수 없음
  age: number,
  name: string,
  gender?: string,
  subject: string,
  pass: boolean,
}

function getStudent(): Student {
  return {
    studentId: 12345,
    age: 100,
    name: 'heeming',
    //geder: 'female' //gender 프로퍼티는 옵셔널 기호를 통해 필수 프로퍼티가 아닌 선택적 프로퍼티가 되었음
    subject: 'TypeScript',
    pass: false
  }
} // 인터페이스 Student 대로 반환 함

//예제3
let student_1 = {
  studentId: 56789,
  age: 17,
  name: 'bill',
  gender: 'male',
  subject: 'Node js',
  pass: true,
}
function resetStudentId(student: Student): void {
  //student.studentId = 111222; // studentId는 readonly 속성이므로 값을 변경할 수 없기 때문에 문법 오류가 뜸
}
resetStudentId(student_1);



//인덱싱 방식을 정의하는 인터페이스
interface StringArr {
  [index: number]: string //인덱스는 number 타입이고 각 인덱스의 값의 타입은 string임을 선언
}
const arr_1: StringArr = ['a', 'b', 'c'];
//arr_1[0] = 10; // 10으로 할당 불가 👉 인터페이스 StringArr에서 지정한 인덱스 값 string 때문에 문법 오류가 뜸





//인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string ]: RegExp;
}
let obj1: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

//obj['cssFile'] = 'a'; //obj['cssFile']에 정규표현식 타입이 선언 되었으나, 일반 string 타입을 할당하려 했기 때문에 문법 오류가 뜸





//인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person { // 인터페이스 Person의 name, age 프로퍼티를 상속 받음 👉 코드의 재사용성 올라감
  language: string;
}

const heeming_dev: Developer = {
  name: 'heeming',
  age: 10,
  language: 'Typescript'
}





