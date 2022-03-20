'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToISOString = GetUncurriedThisIntrinsic('Date.prototype.toISOString');

module.exports = DateToISOString;
