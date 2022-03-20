'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToUTCString = GetUncurriedThisIntrinsic('Date.prototype.toUTCString');

module.exports = DateToUTCString;
