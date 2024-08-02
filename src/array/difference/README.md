# array-difference

Returns an array with only the unique values from the first array, by excluding all values from the right array using strict equality for comparisons.

Inspired by [arr-diff](https://github.com/jonschlinkert/arr-diff).

## Examples

```typescript
difference(['a', 'b', 'c'], ['b', 'c', 'e']); // Returns `['a']`

difference([], ['a']); // Returns `[]`
```
