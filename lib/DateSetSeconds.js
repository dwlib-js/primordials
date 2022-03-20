'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateSetSeconds = GetUncurriedThisIntrinsic('Date.prototype.setSeconds');

module.exports = DateSetSeconds;
