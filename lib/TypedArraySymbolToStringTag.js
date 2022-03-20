'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArraySymbolToStringTag = GetUncurriedThisIntrinsic('get TypedArray.prototype[@@toStringTag]');

module.exports = TypedArraySymbolToStringTag;
