'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCDate = GetUncurriedThisIntrinsic('Date.prototype.getUTCDate');

module.exports = DateGetUTCDate;
