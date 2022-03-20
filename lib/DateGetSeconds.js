'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateGetSeconds = GetUncurriedThisIntrinsic('Date.prototype.getSeconds');

module.exports = DateGetSeconds;
