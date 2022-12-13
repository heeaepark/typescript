// interface Person {
//   name: string;
//   age: number;
// }

//타입별칭
type PersonInfo = { //type 키워드 사용
  name: string,
  age: number
}

let steven: PersonInfo = {
  name: 'steven',
  age: 20
}