'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FunctionBind = GetUncurriedThisIntrinsic('Function.prototype.bind');

module.exports = FunctionBind;
