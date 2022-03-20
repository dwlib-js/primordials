'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToString = GetUncurriedThisIntrinsic('Date.prototype.toString');

module.exports = DateToString;
