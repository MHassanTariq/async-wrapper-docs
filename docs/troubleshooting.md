---
sidebar_position: 4
---

# Troubleshooting

## Extracting `.execute` function

If you try to extract the execute function from the `asyncWrapper` object and using the newly created function like:

```js
const exec = asyncWrapper.execute;
exec(asynFunc, 1);
```

This will break the functionality since the `.execute` function is heavily dependent on the values, and functions that are supported by the `AsyncWrapper` class. To use them, the `.execute` function uses the keyword `this` a lot. Therefore, due to the [problem with this](https://stackoverflow.com/a/5911532/15890201) in JavaScript, the scope of `this` is changed, resulting in an error.

You can solve this by directly wrapping your async function with `asyncWrapper.execute`:

```typescript
const response = await asyncWrapper.execute(asynFunc, 1);
```
