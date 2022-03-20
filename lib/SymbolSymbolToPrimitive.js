'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SymbolSymbolToPrimitive = GetUncurriedThisIntrinsic('Symbol.prototype[@@toPrimitive]');

module.exports = SymbolSymbolToPrimitive;
