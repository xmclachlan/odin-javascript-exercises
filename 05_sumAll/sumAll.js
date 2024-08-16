const sumAll = function(value1, value2) {
    let x = []
    let value3 = value2
    let sum = 0

    while (value3 >= value1) {
        x.push(value3)
        value3--
    }

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
