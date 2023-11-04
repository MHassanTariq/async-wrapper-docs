# TypeScript

This section covers the TypeScript side of the module

## Wrapper

The wrapper class is generically typed, giving you the freedom to create configuration as per your requirement. For instance:

```jsx
import { User } from "./modals/User";
import { Listing } from "./interfaces";

export const userApiWrapper = new WrapperAsyncBuilder<{ url: string }, User>()
  .retry(3)
  .subscribers([subscriber])
  .build();
export const searchWrapper = new WrapperAsyncBuilder<{ key: string }, Listing>()
  .enableCache(true)
  .debouce(1000)
  .build();

const subscriber: Subscriber<Listing> = {
  onEvent: (args) => {
    // handle subscriber
  },
};
```

For the data types of `WrapperAsyncBuilder`, the first type, `P` (or `{url: string}` in `userApiWrapper`), is refered to the type of param that will be passed to the function (url, in the considered the case). Second type, `R` (or `User` in `userApiWrapper`), is refered to the Response type of the function.

## Event args

The args in the `onEvent` subscriber can be of 2 types:

```json
{
  SuccessfulEvents: {
    event: SuccessfulEvents,
    data: R,
    metadata: UserDefinedObjectsType
  },

  FailedEventTypes: {
    event: FailedEvents,
    error: any,
    metadata: UserDefinedObjectsType
  }
}
```

Where `R` is refered to the return type of the wrapper, and `UserDefinedObjectsType` is the type of object passed in `.attachMetaData` in the configured object.

### SuccessfulEvents

Successful events are an enum of again 2 types:

```typescript
SuccessfulEvents {
  Resolved = "RESOLVED",
  CachedResolve = "CACHED_RESOLVE",
}
```

`SuccessfulEvents.Resolved` is triggered when the request is successfully fulfilled.

`SuccessfulEvents.CachedResolve` is triggered when the result has been returned from the cache, rather than computing results after processing them.

### FailedEvents

Failed events are also an enum of 2 types:

```typescript
enum FailedEvents {
  Rejected = "REJECTED",
  LimitReached = "LIMIT_REACHED",
}
```

`FailedEvents.Rejected` is triggered when the promise fails due to a rejection.

`FailedEvents.LimitReached` is triggered when the retry limit has been reached and the promise is no longer intended to be continuously retried. Instead, the wrapper will throw an error after publishing this event.
