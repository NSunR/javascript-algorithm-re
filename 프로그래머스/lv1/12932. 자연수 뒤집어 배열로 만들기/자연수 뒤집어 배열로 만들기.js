function solution(n) {
    //string(n) 문자로 만들고
    //string(n).split("") split으로 나눠서 배열을 나열.
    //string(n).split("").reverse() 배열순서 뒤집고 return
    let restr = String(n).split("").map(Number).reverse();
    //.split("");
    //.toString.reverse(); 
    return restr;
}
 