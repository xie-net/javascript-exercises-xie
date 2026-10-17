const fibonacci = function(num) {
    num = Number(num);

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= num; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
