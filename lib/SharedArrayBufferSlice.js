'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SharedArrayBufferSlice = GetUncurriedThisIntrinsic('SharedArrayBuffer.prototype.slice');

module.exports = SharedArrayBufferSlice;
