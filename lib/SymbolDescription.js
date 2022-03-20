'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SymbolDescription = GetUncurriedThisIntrinsic('get Symbol.prototype.description');

module.exports = SymbolDescription;
