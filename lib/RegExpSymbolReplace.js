'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSymbolReplace = GetUncurriedThisIntrinsic('RegExp.prototype[@@replace]');

module.exports = RegExpSymbolReplace;
