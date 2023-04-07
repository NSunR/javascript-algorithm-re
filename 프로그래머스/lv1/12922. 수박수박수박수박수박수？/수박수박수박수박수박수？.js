function solution(n) {
    //반복패턴 = 수박수박수박수...
    //주로 repeat()함수
    //
   let resoobak = '수박'.repeat(n);
   return resoobak.substr(0,n);
}