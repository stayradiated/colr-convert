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
hex2rgb x 18,362,949 ops/sec ±1.24% (98 runs sampled)
rgb2hex x 3,034,386 ops/sec ±1.49% (95 runs sampled)
rgb2hsv x 10,506,710 ops/sec ±1.48% (90 runs sampled)
rgb2hsl x 8,587,422 ops/sec ±1.27% (92 runs sampled)
hsl2rgb x 11,748,296 ops/sec ±1.26% (96 runs sampled)
hsl2hsv x 23,938,610 ops/sec ±1.23% (94 runs sampled)
hsv2rgb x 23,802,459 ops/sec ±1.67% (92 runs sampled)
hsv2hsl x 25,492,025 ops/sec ±1.66% (89 runs sampled)
Fastest is hsv2hsl
