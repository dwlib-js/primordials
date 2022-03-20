'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToLocaleTimeString = GetUncurriedThisIntrinsic('Date.prototype.toLocaleTimeString');

module.exports = DateToLocaleTimeString;
