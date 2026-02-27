const removeFromArray = function() {
    //loop items in arr to check if any item is the same as argument "a"
    //if it's true,use splice(index,1) to delete it
    //for (i = 0; i < arr.length; i++){
       // if (arr[i] === a){
            //arr.splice(i,1);
            //return arr;
        //}
   // }

    //for multiple argument, like arr,a,b,c..,convert arguments to an array
    let args = Array.from(arguments);
    //loop start from args[1]
    for (j = 1; j < args.length; j++){
        for (i = 0; i < args[0].length; i++){
                if (args[0][i] === args[j]){
                    args[0].splice(i,1);
                    i--;
                    
                }
            }
    }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
