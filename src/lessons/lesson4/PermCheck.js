/**
 * A non-empty array A consisting of N integers is given.
 * A permutation is a sequence containing each element from 1 to N once, and only once.
 * For example, array A such that:
 *     A[0] = 4
 *     A[1] = 1
 *     A[2] = 3
 *     A[3] = 2
 * is a permutation, but array A such that:
 *     A[0] = 4
 *     A[1] = 1
 *     A[2] = 3
 * is not a permutation, because value 2 is missing.
 * The goal is to check whether array A is a permutation.
 * Write a function:
 * function solution(A);
 * that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
 * For example, given array A such that:
 *     A[0] = 4
 *     A[1] = 1
 *     A[2] = 3
 *     A[3] = 2
 * the function should return 1.
 * Given array A such that:
 *     A[0] = 4
 *     A[1] = 1
 *     A[2] = 3
 * the function should return 0.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [1..1,000,000,000].
 */

/**
 * Detected time complexity: O(N) or O(N * log(N))
 */

function sum(arr) {
    return arr.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
}

function hasDuplicates(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}

function isPermutation(arr) {
    if (hasDuplicates(arr)) {
        return 0;
    }

    let max = 0;
    const arrSum = sum(arr);
    arr.forEach((element) => {
        if (element > max) {
            max = element;
        }
    });
    return (max * (max + 1)) / 2 === arrSum ? 1 : 0;
}
function solution(A) {
    return isPermutation(A);
}

console.log(solution([2, 3, 1, 5])); // 0
console.log(solution([2, 1, 3, 4, 5])); // 1
console.log(solution([4, 2, 1, 5])); // 0
console.log(solution([1])); // 1
console.log(solution([1, 2, 3])); // 1
console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])); //0
