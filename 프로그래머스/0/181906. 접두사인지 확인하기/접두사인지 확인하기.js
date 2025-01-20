function solution(my_string, is_prefix) {
    let count = 0;
    const master = my_string.split("");
    const prefix = is_prefix.split("");
    if(master[0] === prefix[0]){
        for(let i = 0; i < prefix.length; i++) {
            if(master[i] === prefix[i]){
                count++;
            }
        }
        if(prefix.length === count) {
            return 1;
        }
    }
    return 0;
}