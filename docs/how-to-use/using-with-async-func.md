---
sidebar_position: 2
---

# Using with async function

Use with global configured object

In the previous section, we have created a globally configured object. Now, we will use that configured object with our async function.

## Creating an async function

Consider you have an async function that runs after 500 ms, takes in a param as number, and throws an error if that param is equal to 3. Otherwise, it follows the success case:

```jsx title='helper.js'
export async function asynFunc(param) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (param === 3) return rej("ERROR!!");
      res(param);
    }, 500);
  });
}
```

## Wrap with wrapper

Now, we will wrap the above `asyncFunction` with our custom wrapper.

```jsx title='index.js'
import { asyncWrapper } from "./config/wrappers";
import { asynFunc } from "./helper";

async function main() {
  const result = await asyncWrapper.execute(asynFunc, 1);
}

main();
```

### .execute

The prototype for this function is:

```
.execute(func: (param: T) => Promise<void>, param: T)
```

`func` is refered to as an async function that takes a single param. `param` refers to the object with multiple key-value pairs as input to `func`.

:::cautionSingle param

With the current provided support, an async function is required to take in a single param. That param can have multiple key-value pairs. e.g. `fetchUrl(domain, path)` should be converted to `fetchUrl({domain, path})`

:::
