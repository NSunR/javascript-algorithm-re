function solution(n) {
    // let answer = 0;
    let x = Math.sqrt(n);
    if( x % 1 === 0 )
       return  Math.pow((x+1),2);
    else //if(n !== Math.pow(x,1))
      return -1;
}