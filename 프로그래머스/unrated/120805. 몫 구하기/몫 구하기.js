function solution(num1, num2) {
    if(num1 > num2 || num1 < num2 || num1 === num2){
        return Math.floor(num1 / num2);
    }else{
        return -1;
    }

}