'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpMultiline = GetUncurriedThisIntrinsic('get RegExp.prototype.multiline');

module.exports = RegExpMultiline;
