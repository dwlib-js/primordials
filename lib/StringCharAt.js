'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringCharAt = GetUncurriedThisIntrinsic('String.prototype.charAt');

module.exports = StringCharAt;
