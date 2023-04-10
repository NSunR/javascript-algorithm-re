function solution(arr) {
    let answer = 0;
    //평균값 = ((첫번째 값 +마지막 값)/2)*i(돌릴 i);
    //배열값의 첫번째 값,마지막 값 가져오기
    for(i = 0; i < arr.length; i++){
         answer = answer + arr[i];
        
    }
    return answer/arr.length;
}