# filled-array

Returns an array filled with the specified input.

Inspired by [filled-array](https://github.com/sindresorhus/filled-array).

## Examples

```typescript
filledArray('x', 3); // Returns `some(['x', 'x', 'x'])

filledArray((index: number): number => index, 3); // Returns `some([0, 1, 2])

filledArray('x', 0); // Returns `none`
```
