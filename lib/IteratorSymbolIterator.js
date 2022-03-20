'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const IteratorSymbolIterator = GetUncurriedThisIntrinsic('IteratorPrototype[@@iterator]');

module.exports = IteratorSymbolIterator;
