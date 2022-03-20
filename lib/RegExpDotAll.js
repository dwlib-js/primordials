'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpDotAll = GetUncurriedThisIntrinsic('get RegExp.prototype.dotAll');

module.exports = RegExpDotAll;
