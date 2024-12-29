function solution(num_list) {
    let l = num_list.length;
    if(num_list[l-1] > num_list[l-2]) {
        num_list.push(num_list[l-1] - num_list[l-2])
    } else {
        num_list.push(num_list[l-1] * 2)
    }
    return num_list;
}