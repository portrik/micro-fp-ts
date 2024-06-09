# map-array

Map object keys and values into an array.

Inspired by [map-array](https://github.com/parro-it/map-array).

## Examples

```typescript
mapToArray({ daft: 'punk', giovanni: 'Giorgio' }, (key: string, value: string): string => `${key} ${value}`);
// returns some(['daft punk', 'giovanni Giorgio'])

mapToArray({}, (key: string, value: string): string => `${key} ${value}`);
// returns none
```
