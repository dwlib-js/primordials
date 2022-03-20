'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DateValueOf = GetUncurriedThisIntrinsic('Date.prototype.valueOf');

module.exports = DateValueOf;
