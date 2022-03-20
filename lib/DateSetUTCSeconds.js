'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetUTCSeconds = GetUncurriedThisIntrinsic('Date.prototype.setUTCSeconds');

module.exports = DateSetUTCSeconds;
