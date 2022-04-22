const reverseString = function(str) {
    let result = "";
    if (str.length == 0){
        return result;
    } else{
        //Using for loop to get string starting from backwards
    
        for (i = str.length -1;i>=0;i--){
            result = result + str[i];
        }
        return result;

    }
    

};

// Do not edit below this line
module.exports = reverseString;
