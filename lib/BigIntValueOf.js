'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const BigIntValueOf = GetUncurriedThisIntrinsic('BigInt.prototype.valueOf');

module.exports = BigIntValueOf;
