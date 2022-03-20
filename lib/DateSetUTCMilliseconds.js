'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCMilliseconds = GetUncurriedThisIntrinsic('Date.prototype.setUTCMilliseconds');

module.exports = DateSetUTCMilliseconds;
