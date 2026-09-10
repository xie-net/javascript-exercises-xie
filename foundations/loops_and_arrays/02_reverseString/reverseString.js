const reverseString = function(str) {
    result = '';
    for (i=str.length;i>=0,i--;) {
        const char = str.charAt(i);

        result += char;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
