'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArraySplice = GetUncurriedThisIntrinsic('Array.prototype.splice');

module.exports = ArraySplice;
