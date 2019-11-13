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
  return array[array.length-1];
}
exports.alignMarks = function (b6, b5, b4, b3, b2, rawMark){
  if(rawMark >= b6){
    return exports.linearTransformation(b6,90,100,100,rawMark);
  }
  else if (rawMark < b6 && rawMark >= b5){
    return exports.linearTransformation(b5, 80,(b6-1),89,rawMark)
  }
  else if (rawMark < b5 && rawMark >= b4){
    return exports.linearTransformation(b4, 70,(b5-1),79,rawMark)
  }
  else if (rawMark < b4 && rawMark >= b3){
    return exports.linearTransformation(b3, 60,(b4-1),69,rawMark)
  }
  else if (rawMark < b3 && rawMark >= b2){
    return exports.linearTransformation(b2, 50,(b3-1),59,rawMark)
  }
  else if (rawMark < b2){
    return exports.linearTransformation(0,0,(b2-1),49,rawMark)
  }
}
exports.moderateMarks = function (assessmentMarks, examMedian, examHighest, examLowest) {
  var assessmentHighest = exports.getMax(assessmentMarks); 
  var assessmentLowest = exports.getMin(assessmentMarks);
  var assessmentMedian = exports.Median(assessmentMarks);
  for (let i = 0; i < assessmentMarks.length; i++) {
    var moderatedMark = exports.quadraticTransformation(assessmentLowest,examLowest,assessmentMedian,examMedian,assessmentHighest,examHighest,assessmentMarks[i])
    assessmentMarks[i] = moderatedMark;
  }
  return assessmentMarks; 
}
exports.linearTransformation = function(x1,y1,x2,y2,x){
  var m = (y2-y1)/(x2-x1)
  var b = y1 - m*x1;
  return (m*x) + b;
}
exports.quadraticTransformation = function (x1, y1, x2, y2, x3, y3, x){
  var fraction1 = (y1*(x-x2)*(x-x3))/((x1-x2)*(x1-x3));
  var fraction2 = (y2*(x-x1)*(x-x3))/((x2-x1)*(x2-x3));
  var fraction3 = (y3*(x-x1)*(x-x2))/((x3-x1)*(x3-x2));
  return fraction1 + fraction2 + fraction3;
}