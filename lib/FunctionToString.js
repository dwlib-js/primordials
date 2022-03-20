'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FunctionToString = GetUncurriedThisIntrinsic('Function.prototype.toString');

module.exports = FunctionToString;
