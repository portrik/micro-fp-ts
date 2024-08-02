# range

Module to create a new dense array with the specified range.

Inspired by [array-range](https://github.com/mattdesl/array-range).

## Examples

```typescript
range(3); // Returns `some([0, 1, 2])`
range(0); // Returns `none`

range(-2, 1); // Returns `some([-2, -1])`
range(3, 0); // Returns `some([3, 2, 1])`
range(15, 15); // Returns `none`
```
