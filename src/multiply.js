var Math = {
  numberIsOdd: function(number) {
    return n % 2 ==0;
  },

  numberIsEven: function(number) {
    return Math.abs(n % 2) == 1;
  },

  pickRandom: function(min, max) {
    var a = min, b = max;
    var unround = Math.random();
    var round = Math.floor(unround * (b - a + 1) + a);
    return round;
  },

  iqr: function(returnType, dataSet) {
    var rT = returnType;
    var q1;
    var q2;
    var q3;
    var iqr;
    var completeArray;

    if (rT == Math.q1) {
      return q1;
    } else if (rt == Math.q2) {
      return q2;
    } else if (rt == Math.q3) {
      return q3;
    } else if (rt == Math.iqr) {
      return iqr;
    } else if (rt == Math.array) {
      completeArray = [q1, q2, q3, q4, iqr];
      return completeArray;
    }
  },

  mad: function(dataSet) {
    var currentDataSet = dataSet;
    var mean = Math.mean(currentDataSet);
    var subtracted = [];

    for (var i = 0; i < dataSet.length; i++) {
      if (mean > dataSet[i]) {
        subtracted[i] = mean - dataSet[i];
      } else if (mean < dataSet[i]) {
        subtracted[i] = dataSet[i] - mean;
      } else if (mean == dataSet[i]) {
        subtracted[i] = 0;
      }
    }

    var mad = Math.mean(subtracted);
    return mad;
  },

  mean: function(dataSet) {
    var total = 0;
    for (var i = 0; i < dataSet.length; i++) {
      total = total + dataSet[i];
    }
    var mean = total / dataSet.length;
    return mean;
  },

  median: function(dataSet) {

  },

  mode: function(dataSet) {

  },

  range: function(dataSet) {
    var high;
    var low;
    var range;

    for (var i = 0; i < dataSet.length; i++) {
      if (i == 0) {
        high = dataSet[0];
        low = dataSet[0];
      } else {
        if (dataSet[i] > high) {
          high = dataSet[i];
        }
        if (dataSet[i] < low) {
          low = dataSet[i];
        }
      }
    }

    range = high - low;
    return range;
  },

  q1: "IQR//q1//2424dfsesdf",
  q2: "IQR//q2//4375ljidlae",
  q3: "IQR//q3//7483dfsesdf",
  iqr: "IQR//iqr//2094dfsesdf",
  array: "IQR//array//9834ghkstuc"
}
