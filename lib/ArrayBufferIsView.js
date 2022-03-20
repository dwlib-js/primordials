'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');

const ArrayBufferIsView = GetIntrinsicOrThrow('ArrayBuffer.isView');

module.exports = ArrayBufferIsView;
