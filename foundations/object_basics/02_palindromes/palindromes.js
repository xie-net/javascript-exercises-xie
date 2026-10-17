const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    phrase = phrase.replace(/[^a-z0-9]/g, "");

    let phraseArray = phrase.split("");
    let reversed = phraseArray.reverse().join("");

    return phrase === reversed;
};

// Do not edit below this line
module.exports = palindromes;
