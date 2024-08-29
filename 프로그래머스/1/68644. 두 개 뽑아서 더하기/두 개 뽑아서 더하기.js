function solution(numbers) { 
    let temp = new Set() 
    for(let i = 0; i<numbers.length; i++) { 
        for(let j = i+1; j<numbers.length; j++) { 
            temp.add(numbers[i] + numbers[j]); 
        } 
    } 
    return Array.from(temp).sort(
        (a, b) => a - b); 
}