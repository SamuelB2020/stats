const stats = require('../index.js');
var arry = [1,23,4];

var assessmentMarks = [56,32,68,93,78,67,78,43,89];
var examMarks = [87,89,84,76,98,65,62,86,83]

var examMedian = stats.Median(examMarks);
var examLowest = stats.getMin(examMarks);
var examHighest = stats.getMax(examMarks);


stats.moderateMarks(assessmentMarks,examMedian,examHighest,examLowest)