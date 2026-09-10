const removeFromArray = function(myArray, ...arrItem) {
    for (let i=0; i<(myArray.length); i++) {
        if (arrItem.includes(myArray[i])) {
            myArray.splice(i,1);
            i--;
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
