'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberToExponential = GetUncurriedThisIntrinsic('Number.prototype.toExponential');

module.exports = NumberToExponential;
