'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetMonth = GetUncurriedThisIntrinsic('Date.prototype.getMonth');

module.exports = DateGetMonth;
