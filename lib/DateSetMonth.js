'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetMonth = GetUncurriedThisIntrinsic('Date.prototype.setMonth');

module.exports = DateSetMonth;
