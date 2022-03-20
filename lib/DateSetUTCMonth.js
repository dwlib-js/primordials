'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCMonth = GetUncurriedThisIntrinsic('Date.prototype.setUTCMonth');

module.exports = DateSetUTCMonth;
