# filled

Returns an array filled with the specified input.

Inspired by [filled-array](https://github.com/sindresorhus/filled-array).

## Examples

```typescript
filled('x', 3); // Returns `some(['x', 'x', 'x'])

filled((index: number): number => index, 3); // Returns `some([0, 1, 2])

filled('x', 0); // Returns `none`
```
