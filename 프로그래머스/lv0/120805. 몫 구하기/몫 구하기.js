function solution(num1, num2) {
    if(0 < num1 && num1 <= 100 && 0 < num2 && num2 <=100){
        return Math.floor(num1 / num2);
    }else{
        return -1;
    }

}