const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(inputArray) {
  let result = 0;
  if (inputArray.length == 0){
    return 0;
  }else {
    for (i=0;i<inputArray.length;i++){
      result = result + inputArray[i];
    }
  }
	return result;
};

const multiply = function(multiplyArray) {
  let result = 1;
  for (i=0;i<multiplyArray.length;i++){
    result = result* multiplyArray[i];
  }
  return result;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(inputValue) {
  let result = 1;
  if (inputValue == 0){
    return 1;
  }else{
    for (i=1;i<=inputValue;i++){
      result = result*i;
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
