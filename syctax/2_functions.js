"use strict";
function sum(a, b) {
    return a + b;
}
sum(10, 20);
function add() {
    return 10;
}
function tsFunc(a, b) {
    return a + b;
}
tsFunc(10, 20);
//tsFunc(10,20,30,40) // TS는 지정된 파라미터 길이 외 불필요한 파라미터를 제한하기 때문에 에러가 뜸
//tsFunc(10) //함수의 길이보다 짧게 파라미터가 넘어오기 때문에 에러가 뜸
/* 함수의 옵셔널 파라미터 */
function log(a, b) {
}
log('파라미터 a는 필수');
log('파라미터 a는 필수', '파라미터 b는 필수가 아니죠');
/* 함수의 디폴트 파라미터 */
function getName(firstName, lastName) {
    if (lastName === void 0) { lastName = ""; }
    return "".concat(firstName, " ").concat(lastName);
}
var onlyFirstName = getName('bill');
var fullName = getName('steven', 'jobs');
console.log(onlyFirstName); // bill 출력 
console.log(fullName); // steven jobs
/* 함수의 레스트 파라미터 */
function restFunc() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest;
}
var zero = restFunc();
var fiveArr = restFunc(1, 2, 3, 4, 5);
console.log(zero); //빈 배열 출력
console.log(fiveArr); // [1,2,3,4,5]가 출력
