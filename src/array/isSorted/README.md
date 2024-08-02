# isSorted

A small module to check if an Array is sorted.

Inspired by [is-sorted](https://github.com/dcousens/is-sorted).

## Example

```typescript
isSorted([0, 1, 2, 3], (a: number, b: number): number => a - b); // Returns `true`

isSorted([0, 1, 2, 3], (a: number, b: number): number => b - a); // Returns `false`

isSorted([{ value: 0 }, { value: 2 }, { value: 1 }], (a: { value: number }, b: { value: number }): number => a.value - b.value); // Returns `false`
```
