'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetMinutes = GetUncurriedThisIntrinsic('Date.prototype.getMinutes');

module.exports = DateGetMinutes;
