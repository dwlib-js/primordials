'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayToLocaleString = GetUncurriedThisIntrinsic('Array.prototype.toLocaleString');

module.exports = ArrayToLocaleString;
