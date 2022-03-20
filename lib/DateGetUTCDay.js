'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCDay = GetUncurriedThisIntrinsic('Date.prototype.getUTCDay');

module.exports = DateGetUTCDay;
