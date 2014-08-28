'use strict';

var assert = require('assert');
var convert = require('./index');

describe('colr-convert', function () {

  var tests = {

    rgb: {
      hsv: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [210, 50, 15.69]],
        [[200, 100, 80],   [10, 60, 78.43]],
        [[255, 255, 255],  [0, 0, 100]],
      ],
      hsl: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [210, 33.33, 11.76]],
        [[200, 100, 80],   [10, 52.17, 54.90]],
        [[255, 255, 255],  [0, 0, 100]],
      ]
    },

    hsv: {
      rgb: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [102, 81.6, 71.4]],
        [[180, 80, 60],    [30.6, 153, 153]],
        [[360, 100, 100],  [255, 0, 0]],
      ],
      hsl: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [20, 17.65, 34]],
        [[180, 80, 60],    [180, 66.67, 36]],
        [[360, 100, 100],  [360, 100, 50]],
      ]
    },

    hsl: {
      rgb: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [132.6, 91.8, 71.4]],
        [[180, 80, 60],    [71.4, 234.6, 234.6]],
        [[360, 100, 100],  [255, 255, 255]],
      ],
      hsv: [
        [[0, 0, 0],        [0, 0, 0]],
        [[20, 30, 40],     [20, 46.15, 52]],
        [[180, 80, 60],    [180, 69.57, 92]],
        [[360, 100, 100],  [360, 0, 100]],
      ]
    }
  };

  for (var from in tests) {
    for (var to in tests[from]) {
      test(from, to, tests[from][to]);
    }
  }

  function round2dp (float) {
    return Math.round(float * 100) / 100;
  }

  function compare (actual, expected) {
    assert.deepEqual(
      actual.map(round2dp),
      expected.map(round2dp)
    );
  }

  function test (from, to, colors) {
    it('should convert '+from+' to '+to, function () {
      colors.forEach(function (color) {
        compare(
          convert[from][to](color[0]),
          color[1]
        );
      });
    });
  }

});
