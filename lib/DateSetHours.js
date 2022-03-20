'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetHours = GetUncurriedThisIntrinsic('Date.prototype.setHours');

module.exports = DateSetHours;
