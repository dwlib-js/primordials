'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetDay = GetUncurriedThisIntrinsic('Date.prototype.getDay');

module.exports = DateGetDay;
