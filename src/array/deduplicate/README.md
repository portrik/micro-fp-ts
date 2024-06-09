# deduplicate

Removes duplicates from your array.

Inspired by [dedupe](https://github.com/seriousManual/dedupe).

## Examples

```typescript
deduplicate([1, 2, 2, 3]); // Returns `[1, 2, 3]`

deduplicate([{ a: 1 }, { a: 1 }, { a: 2 }], (value: { a: number }) => String(value.a)); // Returns `[{ a: 1 }, { a: 2 }]`
```
