'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetDate = GetUncurriedThisIntrinsic('Date.prototype.getDate');

module.exports = DateGetDate;
