'use strict';

module.exports = {
  hex: {
    rgb: hex2rgb,
  },
  rgb: {
    hsl: rgb2hsl,
    hsv: rgb2hsv,
    hex: rgb2hex,
  },
  hsl: {
    rgb: hsl2rgb,
    hsv: hsl2hsv,
  },
  hsv: {
    rgb: hsv2rgb,
    hsl: hsv2hsl,
  },
};

// convert a charcode to a hex val
function hexVal (c) {
  return (
    c < 58 ? c - 48 : // 0 - 9
    c < 71 ? c - 55 : // A - F
    c - 87            // a - f
  );
}

function hex2rgb (hex) {
  var i = hex[0] === '#' ? 1 : 0;
  var r = (hexVal(hex.charCodeAt(0+i)) << 4) + hexVal(hex.charCodeAt(1+i));
  var g = (hexVal(hex.charCodeAt(2+i)) << 4) + hexVal(hex.charCodeAt(3+i));
  var b = (hexVal(hex.charCodeAt(4+i)) << 4) + hexVal(hex.charCodeAt(5+i));
  return [r, g, b];
}


function rgb2hex (rgb) {
  return '#' + (
    '000000' +
    ((rgb[0] << 16) +
     (rgb[1] << 8) +
      rgb[2]
    ).toString(16)
  ).slice(-6);
}

function rgb2hsl (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;

  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h, s, l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h, s, v;

  if (max === 0) {
    s = 0;
  } else {
    s = (delta / max * 1000) / 10;
  }

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var t1, t2, t3, rgb, val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i += 1) {
    t3 = h + 1 / 3 * - (i - 1);
    if (t3 < 0) { t3 += 1; }
    if (t3 > 1) { t3 -= 1; }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var sv, v;

  if (s === 0) {
    return [h, 0, l * 100];
  }

  if (l === 0) {
    return [h, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsv2rgb(hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var hi = Math.floor(h) % 6;

  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - (s * f));
  var t = 255 * v * (1 - (s * (1 - f)));
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0];
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var sl, l;

  if (s === 0) {
    return [h, 0, v * 100];
  }

  if (v === 0) {
    return [h, 0, 0];
  }

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  l /= 2;
  return [h, sl * 100, l * 100];
}
