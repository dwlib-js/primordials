'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const RegExpSymbolSplit = GetUncurriedThisIntrinsic('RegExp.prototype[@@split]');

module.exports = RegExpSymbolSplit;
