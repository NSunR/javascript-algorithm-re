function solution(x) {
        let sum = 0;
        let arr = String(x).split(""); //split으로 나눠주려면 문자화
        for(let i = 0; i < arr.length; i++){
            sum += Number(arr[i])
            
        }
       if( x % sum === 0){
           return true;
       }else{
           return false;
       }
}