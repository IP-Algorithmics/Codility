function numberToBinary(number) {
    return (number >>> 0).toString(2);
}

function binaryGap(n) {
    let maxGap = 0;
    const positionsArr = [-1, -1];
    const number = numberToBinary(n).split("");
    const len = number.length;

    number.some((bit, index) => {
        if (bit === "1") {
            if (positionsArr[0] === -1) {
                positionsArr[0] = index;
            } else {
                if (positionsArr[1] === -1) {
                    positionsArr[1] = index;
                } else {
                    if (positionsArr[1] - positionsArr[0] - 1 > maxGap) {
                        maxGap = positionsArr[1] - positionsArr[0] - 1;
                    }
                    positionsArr[0] = positionsArr[1];
                    positionsArr[1] = index;
                    //short-circuit the for each if the remaining len is not enough to surpass the current max
                    if (maxGap > len - index) {
                        return true;
                    }
                }
            }
        }
    });

    if (positionsArr[1] !== -1 && positionsArr[1] - positionsArr[0] - 1 > maxGap) {
        maxGap = positionsArr[1] - positionsArr[0] - 1;
    }
    return maxGap;
}

function solution(N) {
    return binaryGap(N);
}

console.log(solution(561892));
