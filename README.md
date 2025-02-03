# Tailwind Purge Issue with Dynamic Classes in Vue.js

This repository demonstrates a common issue encountered when using Tailwind CSS's purge feature with dynamically applied classes in Vue.js components.  The purge process sometimes fails to recognize and remove unused styles, leading to increased bundle size.

## Problem

The provided code shows a simple Vue component with a dynamically assigned class. Even though `bg-red-500` is used in only one state, the Tailwind build may still include other unused classes that were previously in the component.  This happens because the purge analysis doesn't always correctly interpret the dynamic class application at build time.

## Solution

The solution involves ensuring Tailwind correctly understands the dynamic classes. The main strategies are using the `safelist` option or refactoring the dynamic class implementation using a more static approach.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the project. Observe the generated CSS for unused classes.
4. Compare with the solution to see how the issue is addressed.