'use strict';

const GetUncurriedThisIntrinsic = require('#abstract/GetUncurriedThisIntrinsic');

const DataViewSetBigInt64 = GetUncurriedThisIntrinsic('DataView.prototype.setBigInt64');

module.exports = DataViewSetBigInt64;
