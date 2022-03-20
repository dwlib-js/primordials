'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetMinutes = GetUncurriedThisIntrinsic('Date.prototype.setMinutes');

module.exports = DateSetMinutes;
