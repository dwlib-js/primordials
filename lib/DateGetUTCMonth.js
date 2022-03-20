'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCMonth = GetUncurriedThisIntrinsic('Date.prototype.getUTCMonth');

module.exports = DateGetUTCMonth;
