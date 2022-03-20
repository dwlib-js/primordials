'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSymbolSearch = GetUncurriedThisIntrinsic('RegExp.prototype[@@search]');

module.exports = RegExpSymbolSearch;
