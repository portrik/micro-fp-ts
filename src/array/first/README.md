# first

Get the first element or first n elements of an array.

Inspired by [array-first](https://github.com/jonschlinkert/array-first).

## Example

```typescript
first([1,2,3]); // Returns `some(1)`

first([]); // Returns `none`

first([1,2,3], 1); // Returns `some(1)`

first([], 1); // Returns `none`

first([1,2,3], 4); // Returns `some([1,2,3])`

first([], 12); // Returns `none`
```
