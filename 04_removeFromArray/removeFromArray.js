const removeFromArray = function(inputArray, inputValue, ...otherInputValues) {
    //remove element from array if it equals to the inputValue
    for (i = 0; i<inputArray.length;i++){
        if (typeof(inputValue)==typeof(inputArray[i])){
            if (inputArray[i] == inputValue){
                //Using array splice build-in splice() method
                //remove element from inputArray if the inputValue equals to
                //the array element.
                let removeItem = inputArray.splice(i,1);
                
            }

        }
        
    }
    //remove the rest elements which are included in the otherInputValues array.
    for (j= 0; j <otherInputValues.length;j++){
        for (i = 0; i<inputArray.length;i++){
            if (inputArray[i] == otherInputValues[j] && typeof(inputArray[i] == typeof(otherInputValues[j]))){
                let temp = inputArray.splice(i,1);
            }
        }
    }

    return inputArray;



};

// Do not edit below this line
module.exports = removeFromArray;
