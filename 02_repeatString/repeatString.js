const repeatString = function(string, num) {
    let result = '';
    if (num >0){
        for (i=0; i<num; i++){
            result = result+string;
    
        }
    }
    if (num == 0){
        return result;
    }
    if (num <0){
        result = "ERROR";
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
