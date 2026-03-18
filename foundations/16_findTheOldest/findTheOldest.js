const findTheOldest = function(arr) {
    
    arr.sort((a,b) => {
        return computeAge(b) - computeAge(a);       

    });
    
   return arr[0];

    function computeAge (current) {
        let computedAge;
        if (current.yearOfDeath == undefined) {
            computedAge = new Date().getFullYear() - current.yearOfBirth;
        } else {
        computedAge = current.yearOfDeath - current.yearOfBirth;

        }
        return computedAge;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
