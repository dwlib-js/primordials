'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateToLocaleDateString = GetUncurriedThisIntrinsic('Date.prototype.toLocaleDateString');

module.exports = DateToLocaleDateString;
