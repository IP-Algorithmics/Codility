/**
 * Write a function:
 * function solution(A, B, K);
 * that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
 * { i : A ≤ i ≤ B, i mod K = 0 }
 * For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
 * Write an efficient algorithm for the following assumptions:
 * A and B are integers within the range [0..2,000,000,000];
 * K is an integer within the range [1..2,000,000,000];
 * A ≤ B.
 */

/** Detected time complexity:O(1) */
function efficientCountOfDivisibleNumbers(x, y, k) {
    // Add 1 explicitly as A is divisible by M
    if (x % k == 0) return Math.floor(y / k) - Math.floor(x / k) + 1;

    // A is not divisible by M
    return Math.floor(y / k) - Math.floor(x / k);
}

function naiveCountOfDivisibleNumbers(x, y, k) {
    let counter = 0;
    for (let i = x; i <= y; i++) {
        if (i % k === 0) {
            counter++;
        }
    }
    return counter;
}

function solution(A, B, K) {
    return efficientCountOfDivisibleNumbers(A, B, K);
}
console.log(solution(6, 11, 2)); // 3
console.log(solution(0, 0, 11)); // 1
console.log(solution(100, 1230000000, 2)); // 1
