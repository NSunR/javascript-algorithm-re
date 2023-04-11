function solution(n) {
    let str_n = n.toString();
    return Number(str_n.split("").sort((a,b) => b-a).join(""));
    // return n.sort((a,b) => b-a);    
     
}
