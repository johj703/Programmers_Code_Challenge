function solution(n) {
    const trinary = n.toString(3);
    const triReverse = trinary.split("").reverse().join("");
    return  parseInt(triReverse, 3);
}