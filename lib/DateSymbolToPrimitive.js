'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSymbolToPrimitive = GetUncurriedThisIntrinsic('Date.prototype[@@toPrimitive]');

module.exports = DateSymbolToPrimitive;
