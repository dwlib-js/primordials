'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCHours = GetUncurriedThisIntrinsic('Date.prototype.getUTCHours');

module.exports = DateGetUTCHours;
