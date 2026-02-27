const sumAll = function(a,b) {
    //if a or b is negative/non-integer/non-number, return error, 
    // when the value is a non-number parameter, Number.isInteger(value) return false
    const arr = [];
    if ((a <= 0 || b<=0) ||(!Number.isInteger(a) || !Number.isInteger(b))){
        return "ERROR";
    } else if (a > b) {
        for (i = 0; i <= a-b; i++){
            arr.push(b+i);
        }
    } else {
        for (i = 0; i <= b-a; i++) {
            arr.push(a+i);
        }
    }

    return arr.reduce((sum, current) => sum + current, 0);
    
};

// Do not edit below this line
module.exports = sumAll;
