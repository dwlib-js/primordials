'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const PromiseCatch = GetUncurriedThisIntrinsic('Promise.prototype.catch');

module.exports = PromiseCatch;
