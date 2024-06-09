# array-last

Get the last or last n elements in an array.

Inspired by [array-last](https://github.com/jonschlinkert/array-last).

## Example

```typescript
arrayLast([1, 2, 3]); // Returns `some(3)`
arrayLast([]); // Returns `none`

arrayLast([1, 2, 3], 1); // Returns `some(3)`
arrayLast([], 1); // Returns `none`

arrayLast([1, 2, 3], 4); // Returns `some([1, 2, 3])
arrayLast([], 12); // Returns `none`
```
