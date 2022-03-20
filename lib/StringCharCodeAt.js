'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringCharCodeAt = GetUncurriedThisIntrinsic('String.prototype.charCodeAt');

module.exports = StringCharCodeAt;
