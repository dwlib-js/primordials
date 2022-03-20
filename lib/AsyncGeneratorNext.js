'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const AsyncGeneratorNext = GetUncurriedThisIntrinsic('AsyncGeneratorPrototype.next');

module.exports = AsyncGeneratorNext;
