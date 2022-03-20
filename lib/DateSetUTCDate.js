'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCDate = GetUncurriedThisIntrinsic('Date.prototype.setUTCDate');

module.exports = DateSetUTCDate;
