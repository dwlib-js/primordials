'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SymbolValueOf = GetUncurriedThisIntrinsic('Symbol.prototype.valueOf');

module.exports = SymbolValueOf;
