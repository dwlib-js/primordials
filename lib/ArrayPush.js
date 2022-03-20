'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayPush = GetUncurriedThisIntrinsic('Array.prototype.push');

module.exports = ArrayPush;
