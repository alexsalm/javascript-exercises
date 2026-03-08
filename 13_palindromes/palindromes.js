const palindromes = function (string) {
    let newArray = string.slice(0, string.size() - 1);
    newArray.reverse();
    return newArray;
};

// Do not edit below this line
module.exports = palindromes;
