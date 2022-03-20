'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FunctionApply = GetUncurriedThisIntrinsic('Function.prototype.apply');

module.exports = FunctionApply;
