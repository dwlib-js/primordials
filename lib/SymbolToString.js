'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SymbolToString = GetUncurriedThisIntrinsic('Symbol.prototype.toString');

module.exports = SymbolToString;
