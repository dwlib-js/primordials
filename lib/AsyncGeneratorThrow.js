'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const AsyncGeneratorThrow = GetUncurriedThisIntrinsic('AsyncGeneratorPrototype.throw');

module.exports = AsyncGeneratorThrow;
