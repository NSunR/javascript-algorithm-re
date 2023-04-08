function solution(board, moves) {
    let answer = 0;
  //인형담을 result basket
  const basket = [];
  //쌓이는 형태의 stack 삽입 push, 삭제 pop 바구니에 저장.
  //i라는 행 moves i, board j
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      //만약 0을 인형이 없는 빈칸 = 0 ,
      // 열 !== 0, 빈칸이 아니면 => 인형이 채워진(push) 상태
      ////번호주어진 인형. 같은 인형은 같은 번호를 가짐.
      let doll = board[j][moves[i] - 1];
      if (doll !== 0) {
        //마지막에 담긴 값이 열의 인형값이랑 같으면 중복.
        //같은 인형 2개 연속해서 쌓이게 되면 두 인형은 바구니에서 사라지게
        //중복? 이면 pop(빼고) 아니면 push(채워)
        if (basket[basket.length - 1] === doll) {
          //중복되면
          //터지는 중복된 인형 기존 인형+새로운 인형 =2개
          answer = answer + 2;
          basket.pop();
          board[j][moves[i] - 1] = 0; // 중복되서 제거되는 경우에도 board가 바뀌어야 함
        } else {
          //빈공간이 아니면 인형 넣기.
          basket.push(doll);
          //뽑힌 인형 자리는 0으로
          board[j][moves[i] - 1] = 0;
        }
          
        break;
      }
    }
  }
  // 2개 이상 중복 제거 인형의 갯수 리턴.

  return answer;
}