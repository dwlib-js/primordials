'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetFullYear = GetUncurriedThisIntrinsic('Date.prototype.setFullYear');

module.exports = DateSetFullYear;
