'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const GeneratorThrow = GetUncurriedThisIntrinsic('GeneratorPrototype.throw');

module.exports = GeneratorThrow;
