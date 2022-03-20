'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringEndsWith = GetUncurriedThisIntrinsic('String.prototype.endsWith');

module.exports = StringEndsWith;
