# last

Get the last or last n elements in an array.

Inspired by [array-last](https://github.com/jonschlinkert/array-last).

## Example

```typescript
last([1, 2, 3]); // Returns `some(3)`
last([]); // Returns `none`

last([1, 2, 3], 1); // Returns `some(3)`
last([], 1); // Returns `none`

last([1, 2, 3], 4); // Returns `some([1, 2, 3])
last([], 12); // Returns `none`
```
