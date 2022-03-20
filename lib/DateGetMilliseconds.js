'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetMilliseconds = GetUncurriedThisIntrinsic('Date.prototype.getMilliseconds');

module.exports = DateGetMilliseconds;
