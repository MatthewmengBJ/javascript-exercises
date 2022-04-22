const ftoc = function(c_degree) {
  ftoc_result = Math.round(((c_degree-32)*5/9)*10)/10;
  return ftoc_result;
};

const ctof = function(f_degree) {
  ctof_degree = Math.round((f_degree*9/5+32)*10)/10;
  return ctof_degree;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof

};
