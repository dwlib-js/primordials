'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const PromiseThen = GetUncurriedThisIntrinsic('Promise.prototype.then');

module.exports = PromiseThen;
