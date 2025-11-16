import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 문자열 입력
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요. \n");

    // 빈 문자열 처리
    if (input.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    // , 또는 : 구분자 처리
    const numbers = input.split(/,|:/).map(Number);
    
    let sum = 0;
    for (const number of numbers) { //todo: reduce와 비교
      sum += number;
    }
    
    Console.print(sum)


    // 커스텀 구분자 처리
    
    // 문자열 계산

    // 결과 출력
  }
}

export default App;
