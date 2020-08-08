// improvement , missing .join on char array, that makes it work
// zip code receives string not array
function removeChr(str, k) {
    let strLen = str.length;
    let min = Infinity;
    for (let i = 0; i < strLen - k; i++) {
        let newStr = str.split("").splice(i, k);
        let a = zipCode(newStr);
        if (a.length < min) {
            min = a.length;
        }
    }
    return min;
}
function zipCode(str) {
    let strLen = str.length;
    let newStr = "";

    let sameLetterCounter = 0;
    for (let i = 0; i < strLen - 1; i++) {
        if (str[i] === str[i + 1]) {
            sameLetterCounter++;
        } else {
            if (sameLetterCounter === 1) {
                newStr += str[i];
            } else {
                newStr += sameLetterCounter + str[i];
            }
            sameLetterCounter = 1;
        }
    }

    if (sameLetterCounter === 1) {
        newStr += str[strLen - 1];
    } else {
        newStr += sameLetterCounter + str[strLen - 1];
    }
    return newStr;
}

function solution(S, K) {
    return removeChr(S, K);
}

// given a string of letters A-Z and a K number, you have to delete K letters and then compress the string like AAA -> 3A . BAA -> B2B . AABB -> 2A2B
// what is the length of the compressed string
console.log(solution("AAAAABXXAAAAAAAAAAA", 3));
