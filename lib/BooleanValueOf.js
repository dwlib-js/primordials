'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const BooleanValueOf = GetUncurriedThisIntrinsic('Boolean.prototype.valueOf');

module.exports = BooleanValueOf;
