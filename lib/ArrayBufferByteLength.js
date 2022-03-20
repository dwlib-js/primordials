'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const ArrayBufferByteLength = GetUncurriedThisIntrinsic('get ArrayBuffer.prototype.byteLength');

module.exports = ArrayBufferByteLength;
