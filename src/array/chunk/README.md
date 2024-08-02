# chunk

Split array into chunks of a given size.

Inspired by [array.chunk](https://github.com/zhiyelee/array.chunk).

## Examples

```typescript
array.chunk([], 2); // Returns `[]`

array.chunk([0, 1, 2, 3], 2); // Returns `[[0, 1], [2, 3]]`

array.chunk([0, 1, 2, 3], 3); // Returns `[[0, 1, 2], [3]]`
```
