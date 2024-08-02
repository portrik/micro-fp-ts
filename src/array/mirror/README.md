# mirror

A very simple module for creating a keymirror object from an array of keys.

Inspired by [mirrarray](https://github.com/johnwquarles/mirrarray).

## Examples

```typescript
mirror(['key', 1, true, null, undefined]); // Returns `{ 'key': 'key', '1': 1, 'true': true, 'null': null, 'undefined': undefined }`
```
