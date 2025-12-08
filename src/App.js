import { Console } from '@woowacourse/mission-utils';

//todo 
// 예왜처리 throw 던지기
// 중복코드 제거
//함수호출로 리팩토링
class App {
  async run() {
    // 문자열 입력
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');

    //결과
    let sum =0;

    // 빈 문자열 처리
    if (input.trim() === '') {
      Console.print('결과 : 0');
      return;
    }
    // 커스텀 구분자 처리
    else if (input.startsWith('//')) {
      const customEndIndex = input.indexOf('\\n');
      const customDelimiter = input.substring(2, customEndIndex);

      // 커스텀 구분자 예외 처리
      if (!isNaN(customDelimiter)) {
        Console.print('[ERROR] 구분자는 숫자가 될 수 없습니다.');  
  
      } 
      
      const customNumbers = input.substring(customEndIndex+2).split(customDelimiter).map(Number);
      if (customNumbers.some(num => num < 0)) {
        Console.print('[ERROR] 0보다 큰 양수인 숫자만 입력 가능합니다.');

      }
      if (customNumbers.some(num => typeof num !== 'number' || isNaN(num))) {
        Console.print('[ERROR] 입력값이나 구분자를 확인해주세요.');

      }
      sum = customNumbers.reduce((acc, cur) => acc + cur, 0);
    
    } else {
      // , 또는 : 구분자 처리
      const numbers = input.split(/,|:/).map(Number);
      if (numbers.some(num => num < 0)) {
        Console.print('[ERROR] 0보다 큰 양수인 숫자만 입력 가능합니다.');

      }
      if (numbers.some(num => typeof num !== 'number' || isNaN(num))) {
        Console.print('[ERROR] 입력값이나 구분자를 확인해주세요.');

      }
      
      sum = numbers.reduce((acc, cur) => acc + cur, 0);
    }

    // 결과 출력
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
