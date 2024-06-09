# array-flatten

Recursively flatten an array or arrays.

Inspired by [arr-flatten](https://github.com/jonschlinkert/arr-flatten).

## Examples

```typescript
arrayFlatten([1]); // Returns `[1]`

arrayFlatten([1, [[[[[2]]]]]]); // Returns `[1, 2]`
```
