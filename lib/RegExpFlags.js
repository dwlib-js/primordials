'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpFlags = GetUncurriedThisIntrinsic('get RegExp.prototype.flags');

module.exports = RegExpFlags;
