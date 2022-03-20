'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetTimezoneOffset = GetUncurriedThisIntrinsic('Date.prototype.getTimezoneOffset');

module.exports = DateGetTimezoneOffset;
