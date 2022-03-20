'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const AsyncIteratorSymbolAsyncIterator = GetUncurriedThisIntrinsic('AsyncIteratorPrototype[@@asyncIterator]');

module.exports = AsyncIteratorSymbolAsyncIterator;
