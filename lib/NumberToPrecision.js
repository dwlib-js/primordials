'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const NumberToPrecision = GetUncurriedThisIntrinsic('Number.prototype.toPrecision');

module.exports = NumberToPrecision;
