'use strict';

module.exports = {
  rules : {
    'no-const-reassign' : require('./rules/no-const-reassign'),
    'no-undef-promise' : require('./rules/no-undef-promise')
  },
  ruleConfig : {
    'no-const-reassign' : 0,
    'no-undef-promise' : 0
  }
};
