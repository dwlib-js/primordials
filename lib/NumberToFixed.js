'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberToFixed = GetUncurriedThisIntrinsic('Number.prototype.toFixed');

module.exports = NumberToFixed;
