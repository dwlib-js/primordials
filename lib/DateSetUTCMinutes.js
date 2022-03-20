'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCMinutes = GetUncurriedThisIntrinsic('Date.prototype.setUTCMinutes');

module.exports = DateSetUTCMinutes;
