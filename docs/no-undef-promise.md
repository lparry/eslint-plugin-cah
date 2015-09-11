# Ignore built-in Promise

This rule flags any use of `Promise` that is not explicitly defined.

## Rule Details

`babel-eslint` currently makes it impossible to remove `Promise` from the global
scope, so it cannot be flagged as undefined by `no-undef`. Projects that use
certain promise libaries (such as Bluebird) often assume that certain non-A+
functionality exists (such as `Promise.map`). This rule will help eliminate
errors and silent defects in codebases that make these assumptions.

The following patterns are considered warnings:

```js
return new Promise(function(resolve, reject) {
  resolve();
});
```

The following patterns are not considered warnings:

```js
import Promise from 'es6-promise';

return new Promise(function(resolve, reject) {
  resolve();
});
```

```js
const b = {};
b.a = 'a';
delete b.a;
b.b = 0;
++b.b;
```

### Options

This rule does not require or provide any options.

## When Not to Use It

- If you want to use your environment's builtin promises.
- You are not using `babel-eslint`
