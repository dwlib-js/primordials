'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCFullYear = GetUncurriedThisIntrinsic('Date.prototype.setUTCFullYear');

module.exports = DateSetUTCFullYear;
