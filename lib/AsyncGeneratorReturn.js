'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const AsyncGeneratorReturn = GetUncurriedThisIntrinsic('AsyncGeneratorPrototype.return');

module.exports = AsyncGeneratorReturn;
