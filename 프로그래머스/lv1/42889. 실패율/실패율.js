function solution(N, stages) {
  let answer = [];
  //xclear/players =실패율
  ///곱셈이 덧셈의 연장, 나눗셈은 빼기의 연속??
  //N=스테이지 개수
  //1  N  +1
  //clearX players in statges
  for (let i = 1; i <= N; i++) {
    //players in stages
    //xClearPlayers
    const players = stages.filter((stage) => i <= stage).length;
    const xClearP = stages.filter((stage) => i === stage).length;
    //나눗셈없이??...어떻게 구하면 될까요..?
    //a*b =c
    //a=c/b
    //a+...+a(*b) =c 
    //0 = c-a-a-..-a-a(*b)
    // xClearP * i - players...나머지가 있는 것들은 어떻게?
    answer.push([i, xClearP / players]);
    console.log(players);
  }
  //실패율 높은순 stage 정렬..sort((a,b) => b-a)}
  answer.sort((a, b) => b[1] - a[1]);
  console.log("answer", answer);
  return answer.map((stage) => stage[0]);
}