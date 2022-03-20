'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpToString = GetUncurriedThisIntrinsic('RegExp.prototype.toString');

module.exports = RegExpToString;
