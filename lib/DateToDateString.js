'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToDateString = GetUncurriedThisIntrinsic('Date.prototype.toDateString');

module.exports = DateToDateString;
