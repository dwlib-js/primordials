'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetHours = GetUncurriedThisIntrinsic('Date.prototype.getHours');

module.exports = DateGetHours;
