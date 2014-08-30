colr-convert
============

> Color conversion functions.

This is a fork of https://github.com/harthur/color-convert.

The main changes are:

- Only supports RGB, HSV and HSL
- All functions return unrounded values
- Arguments must be passed in as an array
- Call functions like so `convert[from][to]([1, 2, 3]);`
- Adds hex/rgb conversion
- Adds grayscale/rgb conversion

**Note:** Recommend you do not use this library directly. Instead use
https://github.com/stayradiated/colr

## Benchmarks

```
grayscale2rgb x 38,031,394 ops/sec ±1.58% (93 runs sampled)
hex2rgb x 17,449,845 ops/sec ±1.33% (94 runs sampled)
rgb2grayscale x 39,924,086 ops/sec ±1.64% (94 runs sampled)
rgb2hex x 3,941,687 ops/sec ±1.61% (95 runs sampled)
rgb2hsv x 10,588,478 ops/sec ±1.46% (93 runs sampled)
rgb2hsl x 8,416,812 ops/sec ±1.31% (94 runs sampled)
hsl2rgb x 11,965,965 ops/sec ±1.34% (95 runs sampled)
hsl2hsv x 23,853,124 ops/sec ±1.39% (92 runs sampled)
hsv2rgb x 23,312,521 ops/sec ±1.63% (91 runs sampled)
hsv2hsl x 23,423,192 ops/sec ±1.32% (88 runs sampled)
Fastest is rgb2grayscale
```
