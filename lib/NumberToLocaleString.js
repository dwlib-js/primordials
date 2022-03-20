'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberToLocaleString = GetUncurriedThisIntrinsic('Number.prototype.toLocaleString');

module.exports = NumberToLocaleString;
