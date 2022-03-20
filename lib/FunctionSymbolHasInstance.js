'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const FunctionSymbolHasInstance = GetUncurriedThisIntrinsic('Function.prototype[@@hasInstance]');

module.exports = FunctionSymbolHasInstance;
