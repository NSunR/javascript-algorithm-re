function solution(num1, num2) {
    let numbers = [num1, num2]
    return numbers.reduce((num1, num2) => num1 + num2, 0);
}