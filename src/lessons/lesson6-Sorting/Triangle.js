/**
 * An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
 * A[P] + A[Q] > A[R],
 * A[Q] + A[R] > A[P],
 * A[R] + A[P] > A[Q].
 * For example, consider array A such that:
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 * Triplet (0, 2, 4) is triangular.
 * Write a function:
 * function solution(A);
 * that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
 * For example, given array A such that:
 *   A[0] = 10    A[1] = 2    A[2] = 5
 *   A[3] = 1     A[4] = 8    A[5] = 20
 * the function should return 1, as explained above. Given array A such that:
 *   A[0] = 10    A[1] = 50    A[2] = 5
 *   A[3] = 1
 * the function should return 0.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [0..100,000];
 * each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */

/** Detected time complexity: O(N*log(N)) 100% */
function hasTriangle(arr) {
    const arrLen = arr.length;
    if (arrLen < 3) return 0;

    // sorted array in increasing order
    // that means arr[i+2] > arr[i+1] and arr[i+2] > arr[i]
    // that means arr[i + 1] + arr[i + 2] > arr[i] is always true
    // that means arr[i] + arr[i + 2] > arr[i + 1] is always true
    arr = arr.sort((x, y) => x - y);
    for (let i = 0; i < arrLen - 2; i++) {
        if (arr[i] + arr[i + 1] > arr[i + 2]) return 1;
    }
    return 0;
}

function solution(A) {
    return hasTriangle(A);
}
