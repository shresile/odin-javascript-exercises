const palindromes = function (str) {
    let compactStr = str
        .toLowerCase()
        .split("")
        .filter(c => c >= 'a' && c <= 'z' || c >= '0' && c <= '9')
        .join('');
    let compactStrReversed = str
        .toLowerCase()
        .split("")
        .filter(c => c >= 'a' && c <= 'z' || c >= '0' && c <= '9')
        .reverse()
        .join('');

    return compactStr == compactStrReversed;
    



};

// Do not edit below this line
module.exports = palindromes;
