'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const BooleanToString = GetUncurriedThisIntrinsic('Boolean.prototype.toString');

module.exports = BooleanToString;
