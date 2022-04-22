const fibonacci = function(position) {
    //Generate a fibonacci sequence. 
    //let fibonacci = [];
    let firstNum = 1;
    let secondNum = 1;
    let result = 0;
    let real_position = 0;
    if (position <0){
        return "OOPS";
    } else {
        if (typeof(position) == "string"){
            real_position = parseInt(position);
        } else {
            real_position = position;
        }
        //可以用console.log来作为断点检查的参考，看看参数的值是什么。
        //console.log("real_position is",real_position);

        //Fibonacci的情况有点特殊，它的第一位和第二位都是1，从第三位开始才是计算出来的。
        //所以，也应该按照这些条件来处理。
        //另外记得判断是否相等应该用“==”而不是一个等于号。
        if (real_position == 1){
            
            return 1;
        }else if (real_position == 2){
            return 1;
        } else {
            for (i = 0; i<real_position-2;i++){
                result = firstNum + secondNum;
                firstNum = secondNum;
                secondNum = result;
        
            }
            
            return result;

        }

        
    }

    
    
    






};

// Do not edit below this line
module.exports = fibonacci;
