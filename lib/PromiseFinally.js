'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const PromiseFinally = GetUncurriedThisIntrinsic('Promise.prototype.finally');

module.exports = PromiseFinally;
