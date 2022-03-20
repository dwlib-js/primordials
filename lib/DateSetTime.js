'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetTime = GetUncurriedThisIntrinsic('Date.prototype.setTime');

module.exports = DateSetTime;
