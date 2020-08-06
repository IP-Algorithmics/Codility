/**
 * The problem asks for a full sequence in the array to the number X and then return the index of the element that fulfills the sequence
 */
// not working
function countSeconds(x, arr) {
    let boolArray = [];

    for (let i = 0; i < x; i++) {
        boolArray.push(false);
    }
    console.log(x, arr, boolArray);

    const boolArrLen = boolArray.length;
    let jumpPosition = -1;

    arr.some((x, index) => {
        if (x - 1 < boolArrLen) {
            boolArray[x] = true;
        }
        console.log(boolArray);

        if (boolArray.every((x) => x === true)) {
            jumpPosition = index;
            return true;
        }
    });
    return jumpPosition;
}

function solution(X, A) {
    return countSeconds(X, A);
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
// console.log(solution(1, [1])); //0
