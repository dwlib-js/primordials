'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCFullYear = GetUncurriedThisIntrinsic('Date.prototype.getUTCFullYear');

module.exports = DateGetUTCFullYear;
