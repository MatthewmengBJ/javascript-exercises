const caesar = function(inputLine, shiftNumber) {
    let originalValue;
    let cipher;
    let result = "";
    if (shiftNumber > 26){
        shiftNumber = shiftNumber%26;
    }
    for (i = 0; i< inputLine.length; i++){
        originalValue = inputLine.charCodeAt(i);
        //大写字母是从65到90，小写字母是从97到122
        //针对大写字母的处理
        if (originalValue >=65 && originalValue <=90){
            
            cipher = originalValue + shiftNumber;
            if (cipher>90){
                cipher = cipher - 26;
            }else if (cipher <65){
                cipher = cipher + 26;
            } else {
                cipher = cipher;
            }
            result = result + String.fromCharCode(cipher);
            
        } 
        //针对小写字母的处理
        else if (originalValue >=97 && originalValue <=122 ){
            cipher = originalValue + shiftNumber;
            if (cipher >122){
                cipher = cipher - 26;
            } else if (cipher <97){
                cipher = cipher +26;
            } else{
                cipher = cipher;
            }
            result = result + String.fromCharCode(cipher);
        }
        else{
            result = result + String.fromCharCode(originalValue);
        }
        

    }

    return result;

};

// Do not edit below this line
module.exports = caesar;
