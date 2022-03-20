'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSymbolMatch = GetUncurriedThisIntrinsic('RegExp.prototype[@@match]');

module.exports = RegExpSymbolMatch;
