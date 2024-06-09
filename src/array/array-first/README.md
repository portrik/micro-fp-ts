# array-first

Get the first element or first n elements of an array.

Inspired by [array-first](https://github.com/jonschlinkert/array-first).

## Example

```typescript
arrayFirst([1,2,3]); // Returns `some(1)`

arrayFirst([]); // Returns `none`

arrayFirst([1,2,3], 1); // Returns `some(1)`

arrayFirst([], 1); // Returns `none`

arrayFirst([1,2,3], 4); // Returns `some([1,2,3])`

arrayFirst([], 12); // Returns `none`
```
