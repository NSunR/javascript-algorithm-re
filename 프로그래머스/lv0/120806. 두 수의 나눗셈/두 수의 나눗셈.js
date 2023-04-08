function solution(num1, num2) {
  let oneNum = num1 * 1000;
  let twoNum = num2;
  let result = 0;

  while (oneNum >= twoNum) {
    oneNum -= twoNum;
    result++;
  }

  return result;
}