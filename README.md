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

**Note:** Recommend you do not use this library directly. Instead use
https://github.com/stayradiated/colr

## Benchmarks

```
hex2rgb x 18,875,680 ops/sec ±0.39% (101 runs sampled)
rgb2hex x 3,257,972 ops/sec ±0.09% (103 runs sampled)
rgb2hsv x 11,271,055 ops/sec ±0.47% (96 runs sampled)
rgb2hsl x 9,228,333 ops/sec ±0.27% (100 runs sampled)
hsl2rgb x 12,524,803 ops/sec ±0.45% (99 runs sampled)
hsl2hsv x 24,861,301 ops/sec ±0.74% (95 runs sampled)
hsv2rgb x 26,029,072 ops/sec ±0.41% (97 runs sampled)
hsv2hsl x 26,645,240 ops/sec ±0.62% (94 runs sampled)
Fastest is hsv2hsl
```
