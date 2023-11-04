---
sidebar_position: 2
---

# Architecture

:::cautionImportant

This section is for all the developers out there who wish to contribute to this package. This section will help dig deeper in each module. However, if you're learning on how to use this package, you can skip this section.

:::

This section mainly covers the architecture explanations for the different modules in the package. This section refers to the bird eye view of the entire package in detail.

## Foundation

The foundation of this entire project is laid with [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Uncle Bob. Here, the entities are the feature list that are supported by the module. Each module is loosely coupled with other functionalities.

They are all connected through the `index.ts` file. Finally, the exposed class `WrapperAsync` is enwrapped in a builder pattern to provide the optimal way of configuring functions as per your requirements.

![Foundation light themed architecture](/img/foundation_light.png#gh-light-mode-only)![Foundation dark themed architecture](/img/foundation_dark.png#gh-dark-mode-only)

## Entities

Modules are referred to as the entities. Each module represents a single entity. Every entity has it's own implementation, and architecture decisions.

### Cache

**[Proxy pattern](https://www.geeksforgeeks.org/proxy-design-pattern/)**. Cache module proxies the computed result for the incoming params, and uses that for the next time same params are to be passed.

![Cache light themed architecture](/img/cache_light.png#gh-light-mode-only)![Cache dark themed architecture](/img/cache_dark.png#gh-dark-mode-only)
:::tip
This is preferred for Pure functions.
:::

### Debounce

**[Singleton Pattern](https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm)**. Debounce module stores a single timeout at any given time. It is then updated in case any update is made within the `debounceDelay`.

![Debounce light themed architecture](/img/debounce_light.png#gh-light-mode-only)![Debounce dark themed architecture](/img/debounce_dark.png#gh-dark-mode-only)

### Publisher

**[Observer Pattern](https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm)**. Publisher allows you to track events occuring on your promises through subscribing to them.

![Publisher light themed architecture](/img/publisher_light.png#gh-light-mode-only)![Publisher dark themed architecture](/img/publisher_dark.png#gh-dark-mode-only)

### Retry

Retry module doesn't specifically implement any of the retry patterns, other than the traditional implementation. It retries till the configured `retryLimit`, and it will throw an error in case the limit is reached. This implementation gives user the freedom in making the solution more generic.

![Retry light themed architecture](/img/retry_light.png#gh-light-mode-only)![Retry dark themed architecture](/img/retry_dark.png#gh-dark-mode-only)
