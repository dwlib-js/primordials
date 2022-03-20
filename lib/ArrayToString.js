'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayToString = GetUncurriedThisIntrinsic('Array.prototype.toString');

module.exports = ArrayToString;
