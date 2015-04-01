'use strict';

var eslint = require('eslint');
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(eslint.linter);

eslintTester.addRuleTest('rules/no-const-reassign', {
  valid: [
    {
      code: 'var a = "a"; a = "b";'
    },
    {
      code: 'let a = "a"; a = "b";',
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'const a = "a";',
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'const a = {};',
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'const a = 0;',
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'const {a, b} = [1, 2];',
      ecmaFeatures: {
        blockBindings: true,
        destructuring: true
      }
    },
    {
      code: 'const a = {}; a.a = "a"; delete a.a; a.r = 0; ++a.r;',
      ecmaFeatures: {
        blockBindings: true
      }
    }
  ],
  invalid: [
    {
      code: 'const {a, b} = [1, 2]; a = 3;',
      errors: [{ message: 'Invalid assignment to const a.' }],
      ecmaFeatures: {
        blockBindings: true,
        destructuring: true
      }
    },
    {
      code: 'const b = "b"; b = "c";',
      errors: [{ message: 'Invalid assignment to const b.' }],
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'const c = 0; ++c;',
      errors: [{ message: 'Invalid assignment to const c.' }],
      ecmaFeatures: {
        blockBindings: true
      }
    },
    {
      code: 'function test() { const d = 0; delete d; }',
      errors: [{ message: 'Invalid assignment to const d.' }],
      ecmaFeatures: {
        blockBindings: true
      }
    }
  ]
});
