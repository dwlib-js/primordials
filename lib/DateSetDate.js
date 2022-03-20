'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetDate = GetUncurriedThisIntrinsic('Date.prototype.setDate');

module.exports = DateSetDate;
