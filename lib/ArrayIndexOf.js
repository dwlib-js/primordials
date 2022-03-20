'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayIndexOf = GetUncurriedThisIntrinsic('Array.prototype.indexOf');

module.exports = ArrayIndexOf;
