'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetTime = GetUncurriedThisIntrinsic('Date.prototype.getTime');

module.exports = DateGetTime;
