
//숫자형 이넘
enum Shose {
  Nike, //값을 초기화하지 않을 경우 0 부터 1씩 증가 함
  Adidas
}

var myShoes = Shose.Nike;
console.log(myShoes) // 0 출력


//문자형 이넘
enum Laptop{
  Samsung = '삼성',
  Apple = '애플'
}
var myLaptop = Laptop.Samsung;
console.log(myLaptop) // 삼성 출력




//이넘 활용 사례

enum Answer {
  Yes = 'Y',
  No = 'N'
}
// function askQuestion(answer: string) { //이렇게 string 타입으로 작성하게 되면 '예스' , 'y' 등 다양한 값이 들어올수 있어서 오류가 생길 수 있음
//   if( answer === 'yes' ) {
//     console.log('정답입니다.')
//   }
//   if( answer === 'no' ) {
//     console.log('오답입니다.')
//   }
// }

function askQuestion(answer: Answer) { // 이넘 Answer를 타입으로 받으면 주어진 옵션안에서만 선택할 수 있게 범위를 제한하기 때문에 오류를 줄일 수 있음
  if( answer === Answer.Yes ) {
    console.log('정답입니다.')
  }
  if( answer === Answer.No ) {
    console.log('오답입니다.')
  }
}

//askQuestion('예스') // 문법 오류가 뜸
//askQuestion('yes') // 문법 오류가 뜸
askQuestion(Answer.Yes) 
