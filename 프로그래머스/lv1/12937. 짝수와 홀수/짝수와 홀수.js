function solution(num) {
    var answer = ''
    var a = Math.abs(num)
    if ( a % 2 == 0){
        return "Even";
    }else if(a % 2 == 1){
        return "Odd";
    }
    
    return answer;
}