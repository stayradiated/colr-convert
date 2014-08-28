colr-convert
============

> Color conversion functions.

This is a fork of https://github.com/harthur/color-convert.

The main changes are:

- Only supports RGB, HSV and HSL
- All functions return unrounded values
- Arguments must be passed in as an array
- Call functions like so `convert[from][to]([1, 2, 3]);`

## Benchmarks

```
hex2rgb x 21,585,963 ops/sec ±0.39% (98 runs sampled)
rgb2hex x 3,245,651 ops/sec ±0.39% (103 runs sampled)
rgb2hsv x 10,836,285 ops/sec ±0.78% (100 runs sampled)
rgb2hsl x 9,119,668 ops/sec ±0.80% (101 runs sampled)
hsl2rgb x 12,168,378 ops/sec ±0.82% (93 runs sampled)
hsl2hsv x 24,345,050 ops/sec ±0.75% (91 runs sampled)
hsv2rgb x 25,284,993 ops/sec ±0.75% (98 runs sampled)
hsv2hsl x 25,975,369 ops/sec ±0.54% (96 runs sampled)
Fastest is hsv2hsl,hsv2rgb
```
