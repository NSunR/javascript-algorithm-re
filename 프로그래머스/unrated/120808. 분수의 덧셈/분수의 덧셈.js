function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  //1. 두 분수 더한 후의 분자와 분모
  let Head = numer1 * denom2 + numer2 * denom1;
  let Body = denom1 * denom2;
  //2. 두 분수를 더한 분수의 분자와 분모의 최대 공약수 구하기
  // let gcd = (Head, Body) => (Body ? gcd(Body, Head % Body) : Head);
  //값이 떨어질 때까지 
  let gcd = (Head, Body) => (Body ? gcd(Body, Head % Body) : Head);
  //기약 분수 => 분자와 분모의 최대공약수로 분자와 분모 각각 나눠서 나온 분수
  //나누어 떨어질 때까지 반복해주기
  let a = Head / gcd(Head, Body);
  let b = Body / gcd(Head, Body);
  answer.push(a, b);
  return answer;
}