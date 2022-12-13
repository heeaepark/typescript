function sum(a: number, b: number) { //파라미터 타입 정의 
  return a + b;
}
sum(10, 20);

function add(): number { // 리턴값 타입 지정
  return 10;
}


function tsFunc(a: number, b: number): number { //파라미터 타입과 리턴값 타입 모두 지정
  return a + b;
}
tsFunc(10,20)
//tsFunc(10,20,30,40) // TS는 지정된 파라미터 길이 외 불필요한 파라미터를 제한하기 때문에 에러가 뜸
//tsFunc(10) //함수의 길이보다 짧게 파라미터가 넘어오기 때문에 에러가 뜸


/* 함수의 옵셔널 파라미터 */
function log(a: string, b?: string) {
}
log('파라미터 a는 필수');
log('파라미터 a는 필수', '파라미터 b는 필수가 아니죠');

/* 함수의 디폴트 파라미터 */
function getName(firstName: string, lastName: string = "") {
  return `${firstName} ${lastName}`;
}
const onlyFirstName = getName('bill');
const fullName = getName('steven', 'jobs');
console.log(onlyFirstName); // bill 출력 
console.log(fullName); // steven jobs

/* 함수의 레스트 파라미터 */
function restFunc(...rest: number[]) {
  return rest
}
const zero = restFunc();
const fiveArr = restFunc(1,2,3,4,5);
console.log(zero); //빈 배열 출력
console.log(fiveArr); // [1,2,3,4,5]가 출력