'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayValues = GetUncurriedThisIntrinsic('Array.prototype.values');

module.exports = ArrayValues;
