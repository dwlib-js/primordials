'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetFullYear = GetUncurriedThisIntrinsic('Date.prototype.getFullYear');

module.exports = DateGetFullYear;
