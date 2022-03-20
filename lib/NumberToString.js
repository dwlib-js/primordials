'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberToString = GetUncurriedThisIntrinsic('Number.prototype.toString');

module.exports = NumberToString;
