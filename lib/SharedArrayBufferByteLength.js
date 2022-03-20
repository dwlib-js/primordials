'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const SharedArrayBufferByteLength = GetUncurriedThisIntrinsic('get SharedArrayBuffer.prototype.byteLength');

module.exports = SharedArrayBufferByteLength;
