'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetUTCSeconds = GetUncurriedThisIntrinsic('Date.prototype.getUTCSeconds');

module.exports = DateGetUTCSeconds;
