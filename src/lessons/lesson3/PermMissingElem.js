/**
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 * Your goal is to find that missing element.
 * Write a function:
 * function solution(A);
 * that, given an array A, returns the value of the missing element.
 * For example, given array A such that:
 *   A[0] = 2
 *   A[1] = 3
 *   A[2] = 1
 *   A[3] = 5
 * the function should return 4, as it is the missing element.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 */

/**
 * Detected time complexity: O(N) or O(N * log(N))
 */
function missingElement(arr) {
    let max = 0;
    let sum = 0;
    arr.forEach((element) => {
        if (element > max) {
            max = element;
        }
        sum += element;
    });
    let missingNumber = (max * (max + 1)) / 2 - sum;
    if (missingNumber === 0) {
        missingNumber = max + 1;
    }
    return missingNumber;
}

function solution(A) {
    return missingElement(A);
}

console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([1, 3, 4, 5])); // 2
console.log(solution([4, 2, 1, 5])); // 3
console.log(solution([1])); // 2
console.log(solution([])); // 1
console.log(solution([1, 2, 3])); // 4
