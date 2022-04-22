const getTheTitles = function(inputArray) {
    let result =[];
    for (i = 0 ; i<inputArray.length; i++){
        //array.push就是给这个array添加一个元素
        //inputArray[i].title 是通过.property 来访问一个Object的属性
        result.push(inputArray[i].title);
        //或者用以下的方式也可以访问这个object的属性；
        //result.push(inputArray[i]['title']);

    }
    console.log(result);
    return result;

};

// Do not edit below this line
module.exports = getTheTitles;
