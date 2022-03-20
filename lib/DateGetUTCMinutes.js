'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCMinutes = GetUncurriedThisIntrinsic('Date.prototype.getUTCMinutes');

module.exports = DateGetUTCMinutes;
