'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayBufferSlice = GetUncurriedThisIntrinsic('ArrayBuffer.prototype.slice');

module.exports = ArrayBufferSlice;
