const sumAll = function (num1, num2) {

    let sum = 0;

    if (num1 < num2 && num1 > 0 && num2 > 0 && typeof (num1) == 'number' && typeof (num2) == 'number') {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        };

        return sum;
    }
    else if (num1 > num2 && num1 > 0 && num2 > 0 && typeof (num1) == 'number' && typeof (num2) == 'number') {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        };

        return sum;
    }
    else {
        return "ERROR";
    };

    //solution answer
    // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    // if (min < 0 || max < 0) return "ERROR";
    //
    // interesting the answer instead uses this if to switch min and max values
    // if (min > max) {
    //     const temp = min;
    //     min = max;
    //     max = temp;
    // }
    // let sum = 0;
    // for (let i = min; i < max + 1; i++) {
    //     sum += i;
    // }
    // return sum;



};

// Do not edit below this line
module.exports = sumAll;
