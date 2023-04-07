function solution(num1, num2) {
    if(0 < num1 && num1<= 100 || 0 < num2 && num2 <= 100){
        while(num1 >= num2){
            num1 -= num2;
        }
        return Math.abs(num1);
    }else {
        return -1;
    }
}