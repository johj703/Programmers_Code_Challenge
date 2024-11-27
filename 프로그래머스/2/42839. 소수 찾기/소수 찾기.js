function solution(numbers) {
    var answer = new Set(); // answer로 new Set()
    let nums = numbers.split(''); 
    
    // 소수 여부를 판별하는 함수
    const isPrimeNum = (num) => {
         if (num <= 1) return false;
         if (num === 2) return true;
         for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
         }
         return true;
    }
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i]; //기 고정값에 배열의 i번째 요소를 합쳐 새로운 고정값으로 지정
                const copyArr = arr.slice();
                copyArr.splice(i, 1); // newFixed로 고정한 요소를 배열에서 제거하여, 고정되지 않은 요소들로 배열을 채운다.
                
                // 도출된 조합이 answer에 들어있지 않고, 소수일 경우 answer에 추가하도록 하였다.
                if (!answer.has(parseInt(newFixed)) && isPrimeNum(parseInt(newFixed))){
                    answer.add(parseInt(newFixed)) //newFixed 조합을 answer에 추가
                }
                
                getPermutation(copyArr, newFixed); // 고정되지 않은 요소들이 담긴 배열과, 새로운 고정값을 인자로 전달하여 getPermutation 호출.
            }
        }
    }
    
    getPermutation(nums, '');
     
    return answer.size;
}