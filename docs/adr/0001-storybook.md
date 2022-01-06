# 1. storybook

Date: 2022-01-06

## Status

2022-01-06 proposed

## Context

The question is, if we want to provide a possibility to the user, so they can preview their components. There are two possibilities for that:

- Storybook
- Sveltebench

## Decision

We go with `Storybook`, because its way more widespread and mature than `Sveltebench`

## Consequences

Several configfiles, like `svelte.config.js` need to be renamed to `.cjs`. Thats something the compiler doesn't really like.
