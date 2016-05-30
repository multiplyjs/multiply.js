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

  addDigits: function(base, added) {
    baseStr = base.toString();
    addedStr = added.toString();
    finalRes = base + addedStr;
    final = parseInt(finalRes);
    return final;
  }

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
