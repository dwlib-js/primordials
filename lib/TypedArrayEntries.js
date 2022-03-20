'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const TypedArrayEntries = GetUncurriedThisIntrinsic('TypedArray.prototype.entries');

module.exports = TypedArrayEntries;
