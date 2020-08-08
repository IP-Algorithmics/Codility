function a(arr: []) {
    let set = new Set([...arr]);
    let i = 1;
    while (true) {
        if (!set.has(i)) {
            return i;
        }
        i++;
    }
}

function solution(A) {
    return a(A);
}

console.log(solution([1, 3, 6, 4, 1, 2]));
