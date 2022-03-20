'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayConcat = GetUncurriedThisIntrinsic('Array.prototype.concat');

module.exports = ArrayConcat;
