'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToTimeString = GetUncurriedThisIntrinsic('Date.prototype.toTimeString');

module.exports = DateToTimeString;
