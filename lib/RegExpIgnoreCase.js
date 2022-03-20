'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpIgnoreCase = GetUncurriedThisIntrinsic('get RegExp.prototype.ignoreCase');

module.exports = RegExpIgnoreCase;
