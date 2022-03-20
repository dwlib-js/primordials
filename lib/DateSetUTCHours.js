'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCHours = GetUncurriedThisIntrinsic('Date.prototype.setHours');

module.exports = DateSetUTCHours;
