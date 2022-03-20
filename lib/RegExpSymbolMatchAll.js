'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSymbolMatchAll = GetUncurriedThisIntrinsic('RegExp.prototype[@@matchAll]');

module.exports = RegExpSymbolMatchAll;
