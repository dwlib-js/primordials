'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToLocaleString = GetUncurriedThisIntrinsic('Date.prototype.toLocaleString');

module.exports = DateToLocaleString;
