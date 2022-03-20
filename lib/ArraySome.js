'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArraySome = GetUncurriedThisIntrinsic('Array.prototype.some');

module.exports = ArraySome;
