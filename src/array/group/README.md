# Group

Group an array of objects by their key.

Inspired by [group-array](https://github.com/doowb/group-array).

## Examples

```typescript
group([{ 'a': 'a', 'b': 'b' }, { 'a': 'foo', 'b': 'bar' }], 'a'); // Returns `some({ 'a': [{ 'a': 'a', 'b': 'b' }], 'foo': [{ 'a': 'foo', 'b': 'bar' }] })`
```
