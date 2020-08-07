/**
 * A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
 * For example, array A such that:
 *   A[0] = -3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = -2
 *   A[4] = 5
 *   A[5] = 6
 * contains the following example triplets:
 * (0, 1, 2), product is −3 * 1 * 2 = −6
 * (1, 2, 4), product is 1 * 2 * 5 = 10
 * (2, 4, 5), product is 2 * 5 * 6 = 60
 * Your goal is to find the maximal product of any triplet.
 * Write a function:
 * function solution(A);
 * that, given a non-empty array A, returns the value of the maximal product of any triplet.
 * For example, given array A such that:
 *   A[0] = -3
 *   A[1] = 1
 *   A[2] = 2
 *   A[3] = -2
 *   A[4] = 5
 *   A[5] = 6
 * the function should return 60, as the product of triplet (2, 4, 5) is maximal.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [3..100,000];
 * each element of array A is an integer within the range [−1,000..1,000].
 */

/** Detected time complexity: O(N * log(N))  88% */
function product(arr) {
    return arr.reduce((x, current) => x * current);
}

function biggestProductThreeElements(arr) {
    let sortedArr = arr.sort((x, y) => {
        return Math.abs(y) - Math.abs(x);
    });
    let productOfThree = sortedArr[0] * sortedArr[1] * sortedArr[2];
    if (productOfThree > 0) {
        return product(sortedArr.slice(0, 3));
    } else {
        for (let i = 3; i < arr.length; i++) {
            productOfThree = product([sortedArr[0], sortedArr[1], sortedArr[i]]);
            if (productOfThree > 0) {
                return productOfThree;
            }
            productOfThree = product([sortedArr[0], sortedArr[i], sortedArr[2]]);
            if (productOfThree > 0) {
                return productOfThree;
            }
            productOfThree = product([sortedArr[i], sortedArr[1], sortedArr[2]]);
            if (productOfThree > 0) {
                return productOfThree;
            }
        }
        return product([
            sortedArr[arr.length - 1],
            sortedArr[arr.length - 3],
            sortedArr[arr.length - 2]
        ]);
    }
}

function solution(A) {
    return biggestProductThreeElements(A);
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-5, 5, -5, 4]));
console.log(solution([-10, -2, -4]));
console.log(solution([4, 7, 3, 2, 1, -3, -5]));

// function biggestThreeElementsWithIndices(arr) {
//     arr = arr
//         .map((x, index) => {
//             return [x, index];
//         })
//         .sort((x, y) => {
//             return y[0] - x[0];
//         });

//     return arr.slice(0, 3);
// }
// console.log(biggestThreeElementsWithIndices([-3, 1, 2, -2, 5, 6]));
