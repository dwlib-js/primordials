'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const BigIntToLocaleString = GetUncurriedThisIntrinsic('BigInt.prototype.toLocaleString');

module.exports = BigIntToLocaleString;
