'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const GeneratorNext = GetUncurriedThisIntrinsic('GeneratorPrototype.next');

module.exports = GeneratorNext;
