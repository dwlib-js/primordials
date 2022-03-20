'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const StringSymbolIterator = GetUncurriedThisIntrinsic('String.prototype[@@iterator]');

module.exports = StringSymbolIterator;
