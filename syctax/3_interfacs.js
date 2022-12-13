"use strict";
var heeming = {
    age: 100,
    name: '히밍',
};
//함수의 인자를 정의하는 인터페이스
function getUser(user) {
    console.log(user);
}
var bill = {
    name: '빌'
};
var steve = {
    age: 56,
    name: '스티브'
};
//getUser(bill); //age 프로퍼티가 존재하지 않는 구조이므로 문법 오류가 뜸
getUser(steve);
var sumNum = function (a, b) {
    return a + b;
};
var result = sumNum(1, 2);
console.log(result); // 3 출력
function getStudent() {
    return {
        studentId: 12345,
        age: 100,
        name: 'heeming',
        //geder: 'female' //gender 프로퍼티는 옵셔널 기호를 통해 필수 프로퍼티가 아닌 선택적 프로퍼티가 되었음
        subject: 'TypeScript',
        pass: false
    };
} // 인터페이스 Student 대로 반환 함
//예제3
var student_1 = {
    studentId: 56789,
    age: 17,
    name: 'bill',
    gender: 'male',
    subject: 'Node js',
    pass: true,
};
function resetStudentId(student) {
    //student.studentId = 111222; // studentId는 readonly 속성이므로 값을 변경할 수 없기 때문에 문법 오류가 뜸
}
resetStudentId(student_1);
var arr_1 = ['a', 'b', 'c'];
var obj1 = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};
var heeming_dev = {
    name: 'heeming',
    age: 10,
    language: 'Typescript'
};
