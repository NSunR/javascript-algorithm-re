function solution(a, b) {
    let answer = 0;
    let arr = [];
    let an = Math.abs(a);
    let bn = Math.abs(b)
    if (a <= b || a >= b){
        return ((a+b) * (Math.abs(b-a) + 1)) / 2;
    //}else if(a >= b){
    //   return ((a+b) * (Math.abs(b-a) + 1)) / 2;
    }else if(a === b){
        return a || b;
    }
    
    return answer;
}