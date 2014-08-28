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

## Notes

**Hex to RGB**

Hex input must be a string of six characters.
Can only use characters: `A-F a-f 0-9`.

## Benchmarks

```
hex2rgb x 23,167,289 ops/sec ±0.52% (102 runs sampled)
rgb2hex x 3,243,528 ops/sec ±0.47% (90 runs sampled)
rgb2hsv x 11,008,278 ops/sec ±0.54% (100 runs sampled)
rgb2hsl x 9,183,516 ops/sec ±0.96% (95 runs sampled)
hsl2rgb x 11,875,269 ops/sec ±1.25% (96 runs sampled)
hsl2hsv x 23,425,507 ops/sec ±1.59% (90 runs sampled)
hsv2rgb x 24,200,863 ops/sec ±1.60% (94 runs sampled)
hsv2hsl x 24,792,217 ops/sec ±1.55% (91 runs sampled)
Fastest is hsv2hsl,hsv2rgb
```
