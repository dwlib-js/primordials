'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetMilliseconds = GetUncurriedThisIntrinsic('Date.prototype.setMilliseconds');

module.exports = DateSetMilliseconds;
