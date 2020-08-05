/**
 * This is a demo task.
 * Write a function:
 * function solution(A);
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000
 */

/**
 * Detected time complexity: O(N) or O(N * log(N))
 */
function missingElement(arr) {
    let missingNumber = 1;
    arr = arr
        .filter((x) => x > 0)
        .sort((x, y) => {
            return x - y;
        });
    arr.forEach((element) => {
        if (missingNumber === element) {
            missingNumber++;
        }
    });

    return missingNumber;
}

function solution(A) {
    return missingElement(A);
}
console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([...Array.from(Array(40000), (_, i) => i + 1)])); // 400001
console.log(solution([1, 3, 4, 5])); // 2
console.log(solution([4, 2, 1, 5])); // 3
console.log(solution([1])); // 2
console.log(solution([])); // 1
console.log(solution([1, 2, 3])); // 4

console.log(solution([-2, 3, 1, 5])); // 2
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([-1, -3])); // 1
console.log(solution([])); // 1
console.log(solution([1, 2, 3])); // 4
