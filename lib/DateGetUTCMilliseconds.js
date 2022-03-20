'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCMilliseconds = GetUncurriedThisIntrinsic('Date.prototype.getUTCMilliseconds');

module.exports = DateGetUTCMilliseconds;
