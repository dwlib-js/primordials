'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayBuffer = GetUncurriedThisIntrinsic('get TypedArray.prototype.buffer');

module.exports = TypedArrayBuffer;
