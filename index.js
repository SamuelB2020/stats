exports.Total = function(array){
  // Set up a running total
  var total = 0;
  // Go through each element
  for (var i = 0; i < array.length; i++) {
    // Add each item to the total
    total += array[i];
  }
  // Return the total
  return total;
}
exports.Mean = function(array) {
// Return the array total divided by the amount of elements in the array
return Total(array)/array.length;
}
exports.length = function(array) {
  // Return the amoutn of elements in the array
  return array.length;
}
exports.Median = function(array) {
// Sort the array into Ascending Order
array = array.sort(function(a, b){return a-b});
// If the array has an even amount of elements
if(array.length%2 == 0){
  // Return the average of the two middle elements
  return (array[(array.length/2)-1] + array[(array.length/2)])/2;
}
//
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
