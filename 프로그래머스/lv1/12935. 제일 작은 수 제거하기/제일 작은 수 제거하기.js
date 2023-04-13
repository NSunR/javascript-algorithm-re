function solution(arr) {
    let answer = [];
    let min = Math.min(...arr);
    
    if(arr.length <= 1 ){
      return [-1];
    }else{
        arr.splice(arr.indexOf(min),1);
        answer = arr;
    }
    return answer;
    
    // return answer = -1;
}