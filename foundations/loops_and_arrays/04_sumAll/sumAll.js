const sumAll = function(num1, num2) {
    if ((!Number.isInteger(num1)) || (!Number.isInteger(num2)) || num1<0 || num2<0) {
        return "ERROR";
    }
    let myNumArray = [];
    let sum=0;
    
    let greaterNumber = Math.max(num1, num2);

    for (let i=(Math.min(num1,num2));i<= greaterNumber;i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
