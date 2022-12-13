//JS 자료형
//const str = 'hello';



//TS 자료형
const str: string = 'hello'; //문자형 선언
const num: number = 10; //숫자형 선언
let arr1: Array<String> = ['일','이','삼'] //문자 자료형 배열 선언(제네릭 방식)
let arr2: Array<number> = [1,2,4] //숫자 자료형 배열 선언(제네릭 방식)
let numbers: number[] = [1,2,3] //숫자 자료형 배열 (리터럴 방식)


//튜플: 인덱스 위치의 타입을 지정
let address: [string, number] = ['강남', 123456]

//객체 선언
let obj: object = {};

// let person: object = {
//   name: 'heeming',
//   age: 100
// }


let person: { name: string, age: number } = {
  name: 'heeming1',
  age: 100
}




//진위값
const show: boolean = true



