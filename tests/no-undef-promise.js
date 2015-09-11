'use strict';

var eslint = require('eslint');
var RuleTester = eslint.RuleTester;

var ruleTester = new RuleTester(eslint);

ruleTester.run('rules/no-undef-promise', require('../rules/no-undef-promise'), {
  valid: [
    {
      code: 'var Promise = require(\'promise\'); var x = new Promise();'
    }
  ],
  invalid: [
    {
      code: 'var x = new Promise();',
      errors: [{ message: '"Promise" is not defined.' }]
    }
  ]
});
