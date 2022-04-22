const sumAll = function(start, end) {
    let result = 0;
    let temp = 0;
    if (start <0){
        return "ERROR";
    } else if (typeof(start)!="number" || typeof(end)!="number"){
        return "ERROR"
    }
    else {
        if (start > end){
            temp = start;
            start = end;
            end = temp;
        }
        for(i=start;i<=end;i++){
            result = result+i;
        }
        return result;

    }
    

};

// Do not edit below this line
module.exports = sumAll;
