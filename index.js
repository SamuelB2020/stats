exports.Total = function(array){
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
exports.Mean = function(array) {
return Total(array)/array.length;
}
exports.length = function(array) {
  return array.length;
}
exports.Median = function(array) {
array = array.sort(function(a, b){return a-b});
if(array.length%2 == 0){
  console.log(summation);
  return (array[(array.length/2)-1] + array[(array.length/2)])/2;
}
if(array.length%2 != 0){
  return array[Math.trunc(array.length/2)];
}
}
exports.StandardDeviation = function(array) {
var deviationArray = [];
for (var i = 0; i < array.length; i++) {
  var calc = Math.pow((array[i]-Mean(array)),2);
  deviationArray.push(calc);
}
return Math.sqrt(Total(deviationArray)/(deviationArray.length));
}
exports.Mode = function(array) {
  if (!array.length) return [];
  var modeMap = {};
  var currentMax = 0;
  var modeList = [];
  array.forEach(function(value) {
    if (!modeMap[value]) modeMap[value] = 1;
    else modeMap[value]++;
    if (modeMap[value] > currentMax) {
      modeList = [value];
      currentMax = modeMap[value];
    }
    else if (modeMap[value] === currentMax) {
      modeList.push(value);
      currentMax = modeMap[value];
    }
  });
  return modeList;
}
exports.getMin = function(array){
  array = array.sort(function(a, b){return a-b});
  return array[0];
}
exports.getMax = function(array){
  array = array.sort(function(a,b){return a-b});
  return array[array.length];
}
