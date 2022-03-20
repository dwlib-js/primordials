'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const BigIntToString = GetUncurriedThisIntrinsic('BigInt.prototype.toString');

module.exports = BigIntToString;
