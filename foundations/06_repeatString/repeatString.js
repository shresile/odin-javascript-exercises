const repeatString = function(str,num) {
    let newStr = str;
    if (num < 0){
        return 'ERROR';

    } else if (num === 0){
        return '';
    } else {
    
    for (i=0;i<num-1;i++){
        
        newStr =newStr + str;
        
    }
    return newStr;}
};

// Do not edit below this line
module.exports = repeatString;
