---
sidebar_position: 1
---

# Setup

Offers easy installation and modularized configuration.

## Install

Install the library from [npm](https://www.npmjs.com/) by running the following command

```bash
npm i wrapper-async
```

This will install the module in your project.

:::dangerNPM support only

This module is currently available **only** on NPM and not on YARN.

:::

## Configuration

You can use the following code to configure your `asyncWrapper` global object:

```jsx title='config/wrappers.js'
import WrapperAsyncBuilder from "wrapper-async";

const DEBOUNCE_DELAY = 1000;
const RETRY_LIMIT = 3;
const subscriber = {
  onEvent: (val) => {
    // handle event here
  },
};

export const asyncWrapper = new WrapperAsyncBuilder()
  .attachMetaData({ msg: "Receiving in subscriber" })
  .subscribers([subscriber])
  .debouce(DEBOUNCE_DELAY)
  .retry(RETRY_LIMIT)
  .enableCache(true)
  .build();
```

You have the following entities to configure before using the `asyncWrapper` as per your needs:

| Prototype                                   | Purpose                                                                                                                                     | Default value |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| .debounce(delay_in_ms: number)              | This function defines the debounce delay for the execution of user's async function                                                         | 500           |
| .subscribers(event_listeners: Subscriber[]) | This function takes in a list of event listening functions that are triggered with the event_type and value                                 | []            |
| .attachMetaData(obj: any)                   | This function takes in an object of `any` type. This adds as the metadeta for the event listening functions                                 | _undefined_   |
| .retry(retry_limit: number)                 | This configures the retry limit before throwing an error whenever the user's async function fails or rejects                                | 3             |
| .enableCache(should_enable_cache: boolean)  | This enforces the module to enable cache. This will treat your async function as a pure function, returning same result for same parameters | _false_       |
| .build()                                    | Creates an `AsyncWrapper` function with a single `.execute` function in it                                                                  |               |
