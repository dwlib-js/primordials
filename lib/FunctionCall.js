'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FunctionCall = GetUncurriedThisIntrinsic('Function.prototype.call');

module.exports = FunctionCall;
